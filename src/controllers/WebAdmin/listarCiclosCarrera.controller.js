import {getConnection} from "../../database/database";

const getCiclosCarrera = async(req,res) =>{
    try{
        const {id_carrera,id_sede}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("call ciclo_a_ciclo_por_carrera(?,?)",[id_carrera,id_sede]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCiclosCarrera
};