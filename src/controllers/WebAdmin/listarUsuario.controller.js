import {getConnection} from "../../database/database";

const getUsuarios = async(req,res) =>{
    try{
        
        const connection = await getConnection();
        const [result] = await connection.query("call listar_usuarios()");
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getUsuarios
};