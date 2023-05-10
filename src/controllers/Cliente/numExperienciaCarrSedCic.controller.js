import {getConnection} from "../../database/database";

const getExpereinciaCarrSede = async(req,res) =>{
    try{
        const {id_carrera,id_sede,id_ciclo}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("Call num_experiencias_por_carrera_sede_ciclo(?,?,?)",
        [id_carrera,id_sede,id_ciclo]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getExpereinciaCarrSede
};