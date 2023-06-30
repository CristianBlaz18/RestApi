import {getConnection} from "../../database/database";

const getExperienciasAdmin = async(req,res) =>{
    try{
        const {id_experiencia}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("call listar_experiencias_admin_v2(?)",[id_experiencia]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getExperienciasAdmin
};