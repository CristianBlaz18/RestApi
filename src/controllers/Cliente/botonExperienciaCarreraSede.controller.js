import {getConnection} from "../../database/database";

const getBotonExperiencia = async(req,res) =>{
    try{
        const {id_carrera,id_sede}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("Call llamar_boton_experiencias_carrera_sede(?,?)",[id_carrera,id_sede]);
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getBotonExperiencia
};