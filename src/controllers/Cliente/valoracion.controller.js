import {getConnection} from "../../database/database";

const postValoracion = async(req,res) =>{
    try{
        const connection = await getConnection();
        const valoracion = [
            req.body.puntaje,
            req.body.tag_valoracion,
            req.body.fecha_valoracion
          ]
        
        
        const [result] = await connection.query("CALL post_valoracion( ?, ?, ?)",valoracion);
        res.status(200).json({
            message: 'Inserción exitosa',
            result
          })
    }catch(error){
        res.status(500).json('Comuniquese con el administrador');
        res.send(error.message);
    }
    
};



export const methods = {
    postValoracion
};