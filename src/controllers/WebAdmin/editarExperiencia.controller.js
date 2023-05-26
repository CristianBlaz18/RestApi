import {getConnection} from "../../database/database";

const editarExperiencia = async(req,res) =>{
    
    try{
        const {id_experiencia,titulo,subtitulo,parrafo,ciclo_inicio,ciclo_fin,id_categoria,tipo_contenido,ruta_contenido,tag_contenido}=req.query;
        // if(contrasena=== undefined || dni === undefined ||nombres===undefined || apellidos===undefined ||
        //      correo===undefined || id_carrera === undefined || descripcion === undefined || estado === undefined || id_sede=== undefined){
        //     res.status(400).json({message:"Bad Request . PLease fill all field."});
        // }
        const connection = await getConnection();
        connection.query(
            'CALL update_experiencia(?,?,?,?,?,?,?,?,?,?)',
            [id_experiencia,titulo,subtitulo,parrafo,ciclo_inicio,ciclo_fin,id_categoria,tipo_contenido,ruta_contenido,tag_contenido],
            (error, results, fields) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error al Actualizar Experiencia');
              } else {
                res.status(200).send('Experiencia Editada Exitosamente');
              }
            }
          );

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    editarExperiencia
};