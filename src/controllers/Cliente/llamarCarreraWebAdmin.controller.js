import {getConnection} from "../../database/database";

const getCarreraWeb = async(req,res) =>{
    try{
        const connection = await getConnection();
        const [result] = await connection.query("call llamar_carrera_web_admin()");
        res.send(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCarreraWeb
};