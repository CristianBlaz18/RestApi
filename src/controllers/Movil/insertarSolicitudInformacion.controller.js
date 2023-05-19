import {getConnection} from "../../database/database";

const insertarSolicitud = async(req,res) =>{
    try{
        const{id_carrera, nombres, apellido_paterno, apellido_materno, correo, telefono, fecha_nacimiento, modalidad}= req.query;
        const connection = await getConnection();
        connection.query(
            'CALL insertar_solicitud_informacion(?,?,?,?,?,?,?,?)',
            [id_carrera, nombres, apellido_paterno, apellido_materno, correo, telefono, fecha_nacimiento, modalidad],
            (error, results, fields) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error al agregar Informacion');
              } else {
                res.status(200).send('Solicitud Agregada Correctamente');
              }
            }
          );

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    insertarSolicitud
};