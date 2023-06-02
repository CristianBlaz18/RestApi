import {getConnection} from "../../database/database";

const getBotonExp= async(req,res) =>{
    try{
        const {id_carrera,id_sede}= req.query;
        const connection = await getConnection();
        const [result] = await connection.query("CALL llamar_boton_experiencias_carrera_sede_movil(?,?)",[id_carrera,id_sede]);
        const images = [];
        for(let i=0; i<result.length; i++){
            const image = result[i];
            const buffer=Buffer.from(image.blob_ciclo, 'binary');
            const buffer2=Buffer.from(image.icono_categoria_blob, 'binary');
            const base64 = buffer.toString('base64');
            const base642 = buffer2.toString('base64');
            const response = 
                {id_experiencia : image.id_experiencia,
                fila_experiencia : image.fila_experiencia,
                icono_categoria_blob : base642, 
                ciclo_inicio: image.ciclo_inicio, 
                ciclo_fin: image.ciclo_fin,           
                blob_ciclo : base64,
                nombre_categoria : image.nombre_categoria
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
    getBotonExp
};