import {getConnection} from "../../database/database";

const getSedes = async(req,res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("CALL listar_sedes()");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getSedes
};