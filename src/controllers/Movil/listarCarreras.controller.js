import {getConnection} from "../../database/database";

const getCarrera = async(req,res) =>{
    try{
        const {id}= req.params;
        const connection = await getConnection();
        const result = await connection.query("CALL listar_carreras()");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCarrera
};