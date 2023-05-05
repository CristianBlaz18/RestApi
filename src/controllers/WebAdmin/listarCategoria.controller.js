import {getConnection} from "../../database/database";

const getCategoria = async(req,res) =>{
    try{
        const {id_carrera}= req.query;
        const connection = await getConnection();
        const result = await connection.query("call typesMultimedia_byCarrera(?)",[id_carrera]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCategoria
};