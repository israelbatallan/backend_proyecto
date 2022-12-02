const norm = require('normalizr');
const util = require('util');

const printMsj = (objeto) =>{
   console.log(util.inspect(objeto, false, 12, true))
};


/*
    Normalizar un JSON de mensajes
    Retornar JSON Desnormalizado
    Mostrar procesor por consola en EDITOR DE CODIGO
    Uso en server.js
*/
const textSchema = new norm.schema.Entity('text', {idAttribute: "id_text" });
const authorSchema = new norm.schema.Entity('autores', { text: textSchema}, { idAttribute: "email"});
const mensajesSchema = new norm.schema.Entity('mensajes', { author: authorSchema });


const allNormalizeProcess = (mensajes) => {
    const _normalizado = norm.normalize(mensajes, [mensajesSchema]);
    // printMsj(_normalizado);

    const _desnormalizado = norm.denormalize(_normalizado.result, [mensajesSchema], _normalizado.entities );

    const compresion = ((JSON.stringify(_normalizado).length * 100)  / JSON.stringify(mensajes).length).toFixed(2);
    // console.log('Compresion :', compresion + " %");
    return _desnormalizado;
}

module.exports = {allNormalizeProcess};