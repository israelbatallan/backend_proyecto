require('dotenv').config();


const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local');
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const usuarioSchema = require('../config/models/UsuarioSchema');
const sendMailNewUserData = require('../utils/nodemailer.js');
const { cartDao } = require('../daos/index.js');
const User = mongoose.model('usuarios', usuarioSchema);


mongoose.connect(process.env.MONGO_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

passport.use(
    "signup",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            const usuario = await User.findOne({ email: email });
            if (usuario) {
                return done(null, false);
            }
            const userCart = await cartDao.createCarrito()
            const newUser = new User();
            const { nombre, age, phone, adress } = req.body; //campos por formulario
            newUser.cart = userCart;
            newUser.nombre = nombre;
            newUser.age = age;
            newUser.phone = phone;
            newUser.adress = adress;
            newUser.email = email;
            newUser.password = bcrypt.hashSync(password, 10);
            if (req.file === undefined) {
                newUser.thumbnail = "public/assets/img/users/anonimus.jpg";
            } else {
                let newPath = (req.file.path).replace("public/", '');
                newUser.thumbnail = newPath;
            }
            await newUser.save();
            // sendMailNewUserData(nombre, email, age, adress, phone); //manda mail al admin
            return done(null, newUser);
        }
    )
);

passport.use(
    "login",
    new LocalStrategy(
		{passReqToCallback: true},
		async (req, email, password, callback) => {
        const user = await User.findOne({ email: email });
		if(!user) return callback(null, false)
		const comparar = bcrypt.compareSync(password, user.password)
		if(!comparar) return callback(null, false);
		else return callback(null, user)
    })
);

passport.serializeUser((user, callback) => {
	return callback(null, user.email)
});


passport.deserializeUser((id, callback) => {
    User.findById(id, (err, user) => {
        return callback(null, user);
    });
});
	

module.exports = passport;