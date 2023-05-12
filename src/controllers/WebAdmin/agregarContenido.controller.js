import {getConnection} from "../../database/database";

const postContenido = async(req,res) =>{
    try{
        const {tipo_contenido,ruta_contenido,tag}= req.query;
        const connection = await getConnection();
        const [results] = await connection.query('CALL agregar_contenido(?, ?, ?)', [tipo_contenido,ruta_contenido,tag]);
        res.send(results);



        // connection.query(
        //     'CALL agregar_contenido(?, ?, ?)',
        //     [tipo_contenido,ruta_contenido, tag],
        //     (error, results, fields) => {
        //       if (error) {
        //         console.error('Error al ejecutar el procedimiento almacenado: ', error);
        //         res.status(500).json({ message: 'Error al ejecutar el procedimiento almacenado' });
        //     } else {
        //         const id_contenido = results.id_contenido;
        //         res.json({ id_contenido });
        //     }
        //     }
            
        //   );
        
        
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    postContenido
};