import {getConnection} from "../../database/database";

const postContenido = async(req,res) =>{
    try{
        const {tipo_contenido,ruta_contenido,tag}= req.query;
        const connection = await getConnection();
        connection.query(
            'CALL agregar_contenido(?, ?, ?)',
            [tipo_contenido,ruta_contenido, tag],
            (error, results, fields) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error al agregar contenido');
              } else {
                res.status(200).send('Contenido agregado con éxito');
              }
            }
          );
        // const result = await connection.query("call agregar_contenido(?,?,?)"
        // ,[tipo_contenido, ruta_contenido, tag]);
        // if (result) {
        //     res.status(200).send('Contenido agregado con éxito');
        //   }
        
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    postContenido
};