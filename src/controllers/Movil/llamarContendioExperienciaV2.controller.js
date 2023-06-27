import {getConnection} from "../../database/database";

const getContenidoExperienciaV2 = async(req,res) =>{
    try{
        const {id_experiencia}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("Call movil_contenido_experiencia_por_id_2(?)",[id_experiencia]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getContenidoExperienciaV2
};