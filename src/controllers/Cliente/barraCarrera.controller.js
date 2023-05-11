import {getConnection} from "../../database/database";

const getBarraCarrera = async(req,res) =>{
    try{
        const {id_carrera}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("call barra_por_usuario(?);",[id_carrera]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getBarraCarrera
};