import {getConnection} from "../../database/database";

const postContenido = async(req,res) =>{
    try{
        const {tipo_contenido,ruta_contenido,tag,id_experiencia}= req.query;
        const connection = await getConnection();
        const [results] = await connection.query('CALL insertar_contenido_admin(?, ?, ?,?)', [tipo_contenido,ruta_contenido,tag,id_experiencia]);
        res.send(results);

        
        
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    postContenido
};