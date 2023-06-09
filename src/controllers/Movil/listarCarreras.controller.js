import {getConnection} from "../../database/database";

const getCarrera = async(req,res) =>{
    try{
        
        const connection = await getConnection();
        const [result] = await connection.query("CALL listar_carreras()");
        const images = [];
        for(let i=0; i<result.length; i++){
            const image = result[i];
            const response = 
                {Id : image.id_carrera,
                Nombre : image.nombre_carrera,
                Ruta : image.imagen_carrera,  
                PlanEstudios: image.plan_estudios_carrera
                };
                images.push(response);
        }
        res.json(images);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
    
};


export const methods = {
    getCarrera
};