import {getConnection} from "../../database/database";

const crearExperiencia = async(req,res) =>{
    try{
        const{id_carrera,id_sede,titulo,subtitulo,parrafo, fila_experiencia,ciclo_inicio,ciclo_fin,id_categoria,id_contenido}= req.query;
        const connection = await getConnection();
        connection.query(
            'CALL agregar_experiencia(?,?, ?,?,?,?,?,?,?,?)',
            [id_carrera,id_sede,titulo,subtitulo,parrafo, fila_experiencia,ciclo_inicio,ciclo_fin,id_categoria,id_contenido],
            (error, results, fields) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error al agregar experiencia');
              } else {
                res.status(200).send('Cexperiencia agregado con éxito');
              }
            }
          );

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    crearExperiencia
};