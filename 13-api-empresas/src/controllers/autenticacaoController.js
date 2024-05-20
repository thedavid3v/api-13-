const Usuario =  require('../models/Usuario')
const bcrypt = require('bcrypt')


async function registrar(req, res) {
    const {nome, email, senha } req.body

    const UsuarioExiste = await = Usuario.find0ne({email})
    if (UsuarioExiste) {
        return res.status(400).json({ mensagem: "usuário ja existe"})
    }


}






module.exports = {
    registrar
}