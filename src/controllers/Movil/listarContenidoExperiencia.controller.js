import {getConnection} from "../../database/database";

const getContenidoExp = async(req,res) =>{
    try{
        const {id_experiencia}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("Call contenido_experiencias_por_id_experiencia(?)",[id_experiencia]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getContenidoExp
};