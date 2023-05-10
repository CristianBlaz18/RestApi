import {getConnection} from "../../database/database";

const getnumCiclosCarrera = async(req,res) =>{
    try{
        const {id_carrera}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("Call num_ciclos_por_carrera(?)",[id_carrera]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getnumCiclosCarrera
};