import {getConnection} from "../../database/database";
const getSedes = async(req,res) =>{
    try{
        const connection = await getConnection();
        const [result] = await connection.query("CALL listar_sedes()");
        
        for(let i = 0; i < result.length; i++){
            const images = {};
            const image = result[i];
            const buffer=Buffer.from(image.blob_sede, 'binary');
            const base64 = buffer.toString('base64');
            // const response =
            //     {ID : image.id_sede,
            //     NombreSede : image.nombre_sede,
            //     Ruta : image.imagen_sede,                
            //     Imagen : base64,
            //     };
                images.Nombre = image.nombre_sede;
                images.Id = image.id_sede;
                images.Ruta = image.imagen_sede;
                images.Imagen = base64;
                res.json(images); 
        }
        
            
        

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getSedes
};