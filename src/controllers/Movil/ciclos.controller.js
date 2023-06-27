import {getConnection} from "../../database/database";

const getCiclo = async(req,res) =>{
    try{
        const connection = await getConnection();
        const [result] = await connection.query("CALL listar_ciclos()");
        const images = [];
        for(let i=0; i<result.length; i++){
            const image = result[i];
            
            const response = 
                {Id : image.id_ciclo,
                Ruta : image.ruta_ciclo,
                Tag : image.ciclo_tag
                };
                images.push(response);
        }
        res.json(images);  
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};

//HOLA DE MI PARA TI 
export const methods = {
    getCiclo
};