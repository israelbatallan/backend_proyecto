const ContenedorMensajes = require("../controllers/contenedorMensajes");
const { loggerError } = require("../logs/winston");

const Router = require("express").Router;

const routerMensajes = Router();


const mensajes = new ContenedorMensajes("./src/DB/mensajes.json");

routerMensajes.get("/api/mensajes", async (req, res) => {
    res.status(200).send(await mensajes.getAll());
});

routerMensajes.get("/api/mensajes/:id?", async (req, res) => {
    const id = req.params.id;
    const mensajePorId = await mensajes.getById(Number(id));
    if (mensajePorId !== null) return res.status(200).send(mensajePorId);
    else {
        loggerError.log({
            level: "error",
            message: `Error Metodo: ${req.method} Mensaje ${id} no existe`,
        });
        return res.status(404).send(await mensajes.getAll());
    }
});

routerMensajes.delete("/api/mensajes/:id", async (req, res) => {
    const id = req.params.id;
    const mensajePorId = await mensajes.getById(Number(id));
    if (mensajePorId !== null) {
        await mensajes.deleteById(Number(id));
        return res.status(201).send(`Message ID: ${id} borrado`);
    } else {
        loggerError.log({
            level: "error",
            message: `Error Metodo: ${req.method} Mensaje ${id} no existe`,
        });
        return res.status(404).json(`ERROR Mensaje ID:${id} no encontrado`);
    }
});

module.exports = routerMensajes;