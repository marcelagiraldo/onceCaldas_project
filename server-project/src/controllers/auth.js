const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("../utils/jwt");

const register = (req,res) =>{
    const {firstname, lastname , email, password} = req.body;
    if (!email) res.status(400).send({msg:"El email es requerido"})
    if (!password) res.status(400).send({msg:"La contraseña es requerida"})

    const user = new User({
        firstname,lastname,email:email.toLowerCase(),role:"user",active:false,
    });

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password,salt);
    user.password = hashPassword;

    user.save((error,userStorage)=>{
        if(error){
            res.status(400).send(userStorage);
        }else{
            res.status(200).send(userStorage)
        }
    });
};

const login = (req, res) => {
    const {email,password} = req.body;
    if (!email) res.status(400).send({ msg: "El email es obligatorio"});
    if (!password) res.status(400).send({ msg: "La contraseña es obligatoria"});
    const emailLowerCase = emil.toLowerCase();
    User.findOne({email: emailLowerCase}, (error, userStore) =>{
        if(error){
            res.status(500).send({msg: "Error del servidor"});
        }else {
            bcrypt.compare (password, userStore.password, (bcryptError, check)=>{
                if (bcryptError){
                    res.status(500).send({msg: "Error del servidor"});
            }
            else if (!check){
                res.status(400).send({ msg: "Contraseña incorrecta"});
            }
            else if (!userStore.active){
                res.status(401).send({ msg: "Usuario no autorizado o no activo"});
            }else{
                res.status(200).send({
                    access: jwt.createAccessToken(userStore),
                    refres: jwt.createRefreshToken(userStore),
                });
            }
        });
        }
    });
}
