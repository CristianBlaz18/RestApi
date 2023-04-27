import {getConnection} from "../../database/database";

const crearUsuario = async(req,res) =>{
    try{
        const {contrasena,dni,nombres,apellidos,correo,id_carrera,estado,descripcion}=req.body;
        if(contrasena=== undefined || dni === undefined ||nombres===undefined || apellidos===undefined ||
             correo===undefined || id_carrera === undefined || descripcion === undefined || estado === undefined ){
            res.status(400).json({message:"Bad Request . PLease fill all field."});
        }
        const usuario = {contrasena,dni,nombres,apellidos,correo,estado,id_carrera,descripcion}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO tbl_usuario SET ?",usuario);
        res.json({message:"Usuario added"});

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    crearUsuario
};