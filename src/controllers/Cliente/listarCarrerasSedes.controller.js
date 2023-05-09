import {getConnection} from "../../database/database";

const getCarreraSede = async(req,res) =>{
    try{
        const {id_sede}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("Call carrera_por_sede(?)",[id_sede]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCarreraSede
};