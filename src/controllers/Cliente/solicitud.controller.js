import { request, response } from 'express'
import {getConnection} from "../../database/database";

const postSolicitud = async(req = request, res = response) =>{
    const connection = await getConnection();
    const solicitud = [
        req.body.id_carrera,
        req.body.nombres,
        req.body.apellido_paterno,
        req.body.apellido_materno,
        req.body.correo,
        req.body.telefono,
        req.body.fecha_nacimiento,
        req.body.modalidad
      ]
    try{     
        const [result] = await connection.query('CALL post_solicitud(?, ?, ?, ?, ?, ?, ?, ?)',solicitud);
        res.status(200).json({
            message: 'Inserción exitosa',
            result
          })
    }catch(error){
        console.log(error)
        res.status(500).json('Comuniquese con el administrador');
        
    }
    
};



export const methods = {
    postSolicitud
};