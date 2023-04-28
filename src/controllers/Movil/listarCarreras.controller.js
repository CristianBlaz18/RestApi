import {getConnection} from "../../database/database";

const getCarrera = async(req,res) =>{
    try{
        
        const connection = await getConnection();
        const result = await connection.query("CALL listar_carreras()");
        if(result.length > 0){
            const image = result[0];
            const buffer=Buffer.from(image.blob_ciclo, 'binary');
            const base64 = buffer.toString('base64');
            const images = [];
            for(let i=0; i<result[0].length; i++){
                const response ={Ciclos : 
                    {ID : image.id_ciclo,
                    Ruta : image.nruta_ciclo,
                    CicloTag : image.ciclo_tag,                
                    Imagen : base64,
                    }};
                    images.push(response);
            }
            
            res.json(images);
        }else{
          res.status(404).send('Image not found');
        }
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCarrera
};