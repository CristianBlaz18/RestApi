import {getConnection} from "../../database/database";



const getSedes = async(req,res) =>{
    try{
        const {id}= req.params;
        const connection = await getConnection();
        const [result] = await connection.query("CALL listar_sedes()");
        
        // res.json({sede : 
        //     {ID : result1.id_sede,
        //     NombreSede : result1.nombre_sede,
        //     Ubicacion : result1.ubicacion_sede,
        //     Ruta : result1.imagen_sede,
        //     Descripcion : result1.descripcion_sede,
        //     Imagen : result1.blob_sede,
        //     }})
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