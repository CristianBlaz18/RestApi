import {getConnection} from "../../database/database";

const getCicloACiclo= async(req,res) =>{
    try{
        const {id_carrera}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("CAll ciclo_a_ciclo_por_carrera_movil(?)",[id_carrera]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCicloACiclo
};