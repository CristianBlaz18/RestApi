import {getConnection} from "../../database/database";

const getSedes = async(req,res) =>{
    try{
        
        const connection = await getConnection();
        const [result] = await connection.query("CALL listar_sedes()");

        const image = result[0];
        const buffer=Buffer.from(image.blob_sede, 'binary');
        const base64 = buffer.toString('base64');
        const response ={sede : 
            {ID : image.id_sede,
            NombreSede : image.nombre_sede,
            Ruta : image.imagen_sede,                
            Imagen : base64,
            }};
        res.json(response);
            
            
        
        

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getSedes
};