import {getConnection} from "../../database/database";

const getBotonExp= async(req,res) =>{
    try{
        const {id_carrera,id_sede}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("CALL llamar_boton_experiencias_carrera_sede_movil(?,?)",[id_carrera,id_sede]);
        res.send(result)
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getBotonExp
};