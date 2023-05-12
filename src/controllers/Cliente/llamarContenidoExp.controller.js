import {getConnection} from "../../database/database";

const getContenidoExpWeb = async(req,res) =>{
    try{
        const {id_experiencia}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("Call llamar_contenido_experiencia_por_id(?)",[id_experiencia]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};
 //PRUEBA

export const methods = {
    getContenidoExpWeb
};