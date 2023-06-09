import {getConnection} from "../../database/database";

const getCarreraSede= async(req,res) =>{
    try{
        const connection = await getConnection();
        const id = +req.params.id
        if (isNaN(id)) {
            throw new Error('El ID no es un número válido')
          }
        
        const [result] = await connection.query("CALL get_carrera_sede(?)",[id]);
        res.status(200).json(result)
        // res.send(result);
    }catch(error){
        res.status(500).json('Comuniquese con el administrador');
        res.send(error.message);
    }
    
};
const getCarrera= async(req,res) =>{
    try{
        const connection = await getConnection();
        const id = +req.params.id
        if (isNaN(id)) {
            throw new Error('El ID no es un número válido')
          }
        
        const [[result1]] = await connection.query("CALL get_carrera(?)",[id]);
        res.status(200).json(result1)
        // res.send(result1);
    }catch(error){
        res.status(500).json('Comuniquese con el administrador');
        res.send(error.message);
    }
    
};


export const methods = {
    getCarreraSede,
    getCarrera
};