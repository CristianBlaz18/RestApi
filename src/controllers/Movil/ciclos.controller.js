import {getConnection} from "../../database/database";

const getCiclo = async(req,res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT imagen_ciclo FROM tbl_ciclo"); //Where id_carrera = ?
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCiclo
};