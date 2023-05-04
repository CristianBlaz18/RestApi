import {getConnection} from "../../database/database";
import bcrypt from "bcrypt"
// const bcrypt = require('bcrypt');


const validarUsuario = async(req,res) =>{
    // 
    
    // try {
    //   const connection = await getConnection();
    //   const { correo, contrasena } = req.body;
      
    //   connection.query(
    //     'CALL validar_usuario(?, ?)',
    //     [correo, contrasena],
    //     (error, results) => {
    //       if (error) {
    //         throw error;
    //       }
    //       const { id_carrera, Boolean: is_valid } = results[0][0];
    //       res.status(200).json({ id_carrera, is_valid });
    //     }
    //   );
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: 'Ha ocurrido un error al validar al usuario' });
    // }
   const { correo, contrasena } = req.query;

  try {
    const connection = await getConnection();
    // call the stored procedure
    const sql = `CALL validar_usuario('${correo}', '${contrasena}')`;
    connection.query(sql, (error, results) => {
      if (error) throw error;
      // send the response back to the client
      res.json(results[0]);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
    
   

        // const result = await connection.query("CALL validar_usuario(?,?,@valido)",[correo,contrasena]);
        
        // if(!result.length){
        //     return res.status(401).json({ message: 'Credenciales invalidas' }); //
        // }else{
        //     return res.status(200).json({ message: 'Inicio de sesión exitoso' });
        // }
        // const validarContraseña = await bcrypt.compare(contrasena, result.contrasena);
        // if (!validarContraseña) {
        //     return resstatus(401).json({ message: 'Contraseña inválida' });
        // }
    
};


export const methods = {
    validarUsuario
};