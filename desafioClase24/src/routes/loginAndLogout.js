import { Router } from "express";
import path from "path";
import { fileURLToPath } from 'url';


const routerLogin = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const login_html = path.join(__dirname, '../../public/pages/login.html');
const index_html = path.join(__dirname, '../../public/pages/index.html');
const logout_html = path.join(__dirname, '../../public/pages/logout.html');

//Render condicional para login.hmtl o index.html con redirect
routerLogin.get('/', (req, res) => {
    const nombre = req.session?.nombre;
    if (nombre) res.redirect('/home');
    else res.redirect('/login');
});

routerLogin.get('/login', (req, res) => {
    const nombre = req.session?.nombre;
    if (nombre) res.redirect('/home');
    else res.sendFile(login_html);
});

routerLogin.get('/home', (req, res) => {
    const nombre = req.session?.nombre;
    if (nombre) {
        req.session.nombre = nombre;
        res.sendFile(index_html);
    }
    else res.redirect('/login');
});

/*
    Button del login, metodo "POST", captura el "nombre" del formulario
    y los guarda en la session
    Redirecciona a la pagina principal "/home"
*/
routerLogin.post('/setNombre', (req, res) => {
    req.session.nombre = req.body.nombre;
    res.redirect('/home');
});


/*
    Defino ruta para obtener el nombre de la session
    Si la session esta vacia, redirecciona a la pagina de login
    Si la session tiene un nombre guardado uso Fetch en /public/js/index.js
*/
routerLogin.get('/getNombre', (req, res) => {
    if (req.session.nombre) {
        const parseado = JSON.stringify(req.session.nombre);
        res.send(parseado);
    }
    else res.redirect('/login');
});


routerLogin.get('/logout', async (req, res) => {
    const nombre = req.session.nombre;
    if (nombre) {
        res.sendFile(logout_html);
    } else res.redirect("/login");
});


routerLogin.get('/crl', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

export default routerLogin;