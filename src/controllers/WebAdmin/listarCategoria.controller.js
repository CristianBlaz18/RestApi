import {getConnection} from "../../database/database";

const getCategoria = async(req,res) =>{
    try{
        const connection = await getConnection();
        const [result] = await connection.query("call listar_categoria()");
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCategoria
};