import {getConnection} from "../../database/database";

const getPlan = async(req,res) =>{
    try{
        const {id}= req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT plan_estudios FROM tbl_carrera WHERE id_sede =?",id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getPlan
};