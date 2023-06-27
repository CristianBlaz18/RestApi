import {getConnection} from "../../database/database";

const crearExperiencia = async(req,res) =>{
    try{
        const{id_carrera,id_sede,titulo,subtitulo,parrafo, fila_experiencia,ciclo_inicio,ciclo_fin,id_categoria}= req.query;
        const connection = await getConnection();
        connection.query(
            'CALL insertar_experiencia_admin(?,?, ?,?,?,?,?,?,?)',
            [id_carrera,id_sede,titulo,subtitulo,parrafo, fila_experiencia,ciclo_inicio,ciclo_fin,id_categoria],
            (error, [results], fields) => {
              if (error) {
                console.error(error);
                res.status(500).send('Error al agregar experiencia');
              } else {
                res.status(200).send(results);
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