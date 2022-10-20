import express from 'express';
import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';

import routerProducto from './src/routes/routesProductos.js';
import ContenedorMensajes from './src/controllers/contenedorMensajes.js';

import { allNormalizeProcess } from './src/controllers/normalizr.js';

import cookieParser from 'cookie-parser';
import session from 'express-session';
// import MongoStore from 'connect-mongo';

import passport from './src/routes/passport-local.js';

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
        secret: "secreto",
        cookie: {
            maxAge: 1000 * 60 * 10,
        },
        rolling: true,
        resave: true,
        saveUninitialized: false,
    })
);
    
    
app.use(express.static('public'));

app.use("/api", routerProducto);


// ROOT - HOME
app.get('/', routerLogin.getRoot);
app.get('/home', routerLogin.getHome)

//  SIGNUP
app.
    route("/signup")
        .get(routerLogin.getSignup)
        .post(passport.authenticate("signup", {successRedirect:"/login", failureRedirect:"/failsignup"}));
;    
app.get('/failsignup', routerLogin.getFailSignup);


//  LOGIN
app.
    route("/login")
        .get(routerLogin.getLogin)
        .post(passport.authenticate("login", {successRedirect:"/home", failureRedirect:"/faillogin"}), routerLogin.postLogin);
;
app.get('/faillogin', routerLogin.getFailLogin);


// LOGOUT 
app.get('/user', routerLogin.getUser); // extraer Session user
app.get("/logout", routerLogin.getLogout);
app.get('/crl', routerLogin.getCrl);




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

// Intercepta los errores de passport
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
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