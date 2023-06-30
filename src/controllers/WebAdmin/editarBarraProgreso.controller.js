import {getConnection} from "../../database/database";

const editarBarraProgreso = async(req,res) =>{
    
    try{
        const {id_barra,descripcion,ciclo_unlock,ciclo_inicio}=req.query;
        // if(contrasena=== undefined || dni === undefined ||nombres===undefined || apellidos===undefined ||
        //      correo===undefined || id_carrera === undefined || descripcion === undefined || estado === undefined || id_sede=== undefined){
        //     res.status(400).json({message:"Bad Request . PLease fill all field."});
        // }
        const connection = await getConnection();
        connection.query(
            'CALL update_barra_progreso_admin_v2(?,?,?,?)',
            [id_barra,descripcion,ciclo_unlock,ciclo_inicio],
            (error, results, fields) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error al Actualizar Barra');
              } else {
                res.status(200).send('Barra Editada Exitosamente');
              }
            }
          );

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    editarBarraProgreso
};