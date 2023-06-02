import {getConnection} from "../../database/database";

const crearUsuario = async(req,res) =>{
    
    try{
        const {id_carrera,id_sede,contrasena,dni,nombres,apellidos,correo,estado,descripcion,celular}=req.query;
        if(contrasena=== undefined || dni === undefined ||nombres===undefined || apellidos===undefined ||
             correo===undefined || id_carrera === undefined || descripcion === undefined || estado === undefined 
             || id_sede=== undefined || celular=== undefined){
            res.status(400).json({message:"Bad Request . PLease fill all field."});
        }
        const connection = await getConnection();
        connection.query(
            'CALL insertar_usuario(?,?,?,?,?,?,?,?,?,?)',
            [id_carrera,id_sede,contrasena,dni,nombres,apellidos,correo,estado,descripcion,celular],
            (error, results, fields) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error al agregar Usuario');
              } else {
                res.status(200).send('Usuario agregado con éxito');
              }
            }
          );

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    crearUsuario
};