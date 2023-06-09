import {getConnection} from "../../database/database";

const insertarBarra = async(req,res) =>{
    
    try {
        const { carrera_id, barra_descripcion, inicio_ciclo, unlock_ciclo } = req.query;

        // Crear la conexión a la base de datos
        const connection = await getConnection();

        // Llamada al procedimiento almacenado
        const [results] = await connection.query('CALL insertar_barra_progreso(?, ?, ?, ?)', [
        carrera_id,
        barra_descripcion,
        inicio_ciclo,
        unlock_ciclo,
        ]);
        res.send(results)
        // if (results && results&& results) {
        // const respuesta = results.respuesta;

        //     if (respuesta === 200) {
        //         res.status(200).json({ message: 'Datos subidos correctamente' });
        //     } else if (respuesta === 400) {
        //         res.status(400).json({ error: 'No se pueden subir los datos' });
        //     } else {
        //         res.status(500).json({ error: 'Error del servidor' });
        //     }
        // } else {
        // res.status(500).json({ error: 'Error en la respuesta del servidor' });
        // }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error del servidor' });
    }
};


export const methods = {
    insertarBarra
};