import {getConnection} from "../../database/database";

const getExperienciasCarrera= async(req,res) =>{
    try{
        const connection = await getConnection();
        const id = +req.params.id
        if (isNaN(id)) {
            throw new Error('El ID no es un número válido')
          }
        
        const [result] = await connection.query("CALL get_experiencias_carrera(?)",[id]);
        res.send(result);
    }catch(error){
        res.status(500).json('Comuniquese con el administrador');
        res.send(error.message);
    }
    
};



export const methods = {
    getExperienciasCarrera
};