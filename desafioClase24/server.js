import express from 'express';
import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';

import routerProducto from './src/routes/routesProductos.js';
import ContenedorMensajes from './src/controllers/contenedorMensajes.js';

import { allNormalizeProcess } from './src/controllers/normalizr.js';

import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';


import routerLogin from './src/routes/loginAndLogout.js';

const app = express();
const httpServer = new HttpServer(app)
const ioServer = new IOServer(httpServer)

const mensajes = new ContenedorMensajes('./src/DB/mensajes.json');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
    session({
        store: MongoStore.create({
            mongoUrl:
                "mongodb+srv://coder:house@cluster0.vqx67nu.mongodb.net/?retryWrites=true&w=majority",
            mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        }),
        secret: "alohechopecho",
        resave: true,
        saveUninitialized: true,
        rolling: true,
        cookie: {
            maxAge: 60 * 1000,
        },
    })
);

app.use(routerLogin, express.static('public'));

app.use("/api", routerProducto);


ioServer.on("connection", async (socket) => {
    console.log("Nuevo usuario conectado");

    socket.emit("messages", allNormalizeProcess(await mensajes.getAll()));

    socket.on("new-message", async (msj) => {
        await mensajes.save(msj);
        allNormalizeProcess(await mensajes.getAll()),
        
            ioServer.sockets.emit("messages",
                allNormalizeProcess(await mensajes.getAll())
            );
    });
});


app.use((req, res) => {
    res.status(404).send({
        error: -2,
        descripcion: `ruta ${req.originalUrl} y metodo ${req.method} no implementada`,
    });
});


const PORT = 8080;
httpServer.listen(PORT, (err) => {
    if(err) new Error (console.log(err));
    else console.log(`Servidor corriendo en el puerto ${PORT}`);
});