import {getConnection} from "../../database/database";
import bcrypt from "bcrypt"
// const bcrypt = require('bcrypt');


const validarUsuario = async(req,res) =>{
    
   
    try{
        
        const {correo,contrasena}=req.body;
        const connection = await getConnection();
    
        const result = await connection.query("SELECT * FROM tbl_usuario WHERE correo = ? AND contrasena = ?",[correo,contrasena]);
        
        if(!result.length){
            return res.status(401).json({ message: 'Credenciales invalidas' });
        }else{
            return res.status(200).json({ message: 'Inicio de sesión exitoso' });
        }
        // const validarContraseña = await bcrypt.compare(contrasena, result.contrasena);
        // if (!validarContraseña) {
        //     return resstatus(401).json({ message: 'Contraseña inválida' });
        // }
    
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    validarUsuario
};