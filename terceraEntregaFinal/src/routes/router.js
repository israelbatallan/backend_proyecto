const Router = require('express').Router;
const routesHBS = require('./routes')
const passport = require('./passport-local.js');
const uploadFile = require('../middlewares/multer');


const routerAll = Router();

// ROOT - HOME
routerAll.get("/", routesHBS.getRoot);
routerAll.get("/home", routesHBS.getHome);

// SIGNUP
routerAll.
    route("/signup")
        .get(routesHBS.getSignup)
        .post(uploadFile(), passport.authenticate("signup", {successRedirect:"/login", failureRedirect:"/failsignup"})); //multer
;
routerAll.get("/failsignup", routesHBS.getFailSignup);

//  LOGIN
routerAll.
    route("/login")
        .get(routesHBS.getLogin)
        .post(passport.authenticate("login", {successRedirect:"/home", failureRedirect:"/faillogin"}), routesHBS.postLogin);
;
routerAll.get('/faillogin', routesHBS.getFailLogin);

// LOGOUT
routerAll.get("/logout", routesHBS.isItLogged, routesHBS.getLogout);
// routerAll.get("/getuser", routesHBS.isItLogged, routesHBS.getUser); //sin uso por HBS


module.exports = routerAll;