import {getConnection} from "../../database/database";

const postSolicitud = async(req,res) =>{
    try{
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
        
        
        const [result] = await connection.query("CALL post_solicitud(?, ?, ?, ?, ?, ?, ?, ?)",solicitud);
        res.status(200).json({
            message: 'Inserción exitosa',
            result
          })
    }catch(error){
        res.status(500).json('Comuniquese con el administrador');
        res.send(error.message);
    }
    
};



export const methods = {
    postSolicitud
};