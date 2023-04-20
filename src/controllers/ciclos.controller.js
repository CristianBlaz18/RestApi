import {getConnection} from "./../database/database";

const getCiclo = async(req,res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM tbl_ciclo");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCiclo
};