import {getConnection} from "../../database/database";

const getSedes= async(req,res) =>{
    try{
        const connection = await getConnection();
        
        
        const [result] = await connection.query("CALL get_sedes()");
        res.status(200).json(result)
    }catch(error){
        res.status(500).json('Comuniquese con el administrador');
        res.send(error.message);
    }
    
};
const getSede= async(req,res) =>{
    try{
        const connection = await getConnection();
        const id = +req.params.id
        if (isNaN(id)) {
            throw new Error('El ID no es un número válido')
          }
        
        const [[result]] = await connection.query("CALL get_sede(?)",[id]);
        res.send(result);
    }catch(error){
        res.status(500).json('Comuniquese con el administrador');
        res.send(error.message);
    }
    
};





export const methods = {
    getSedes,
    getSede
};