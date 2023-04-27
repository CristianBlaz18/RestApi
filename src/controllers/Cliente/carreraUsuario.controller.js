import {getConnection} from "../../database/database";

const getCarreraUsuario = async(req,res) =>{
    try{
        const {id}= req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT carrera FROM tbl_usuario WHERE id_usuario =?",id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCarreraUsuario
};