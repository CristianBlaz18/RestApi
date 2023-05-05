import { Router } from "express";
import { methods as listarCarrerasController } from "../../controllers/Movil/listarCarreras.controller";
const router = Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     carreras:
 *       type: object
 *       properties:
 *         Id:
 *           type: integer
 *           description: Id de la carrera
 *         Nombre:
 *           type: string
 *           description: Nombre de la carrera
 *         Ruta:
 *           type: string
 *           description: Ruta de la carrera
 *         Imagen:
 *           type: string
 *           description: Imagen de la carrera
 *       required:
 *         - Id
 *         - Nombre
 *         - Ruta
 *         - Imagen
 *       example:
 *         Id: 1
 *         Nombre: Ingeniería de Sistemas
 *         Ruta: /home/opc/DB_Green_multimedia/Imagenes_int/carreras/ing_sistemas.jpeg
 *         Imagen: '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RD'
 */



router.get("/", listarCarrerasController.getCarrera);
/**
 * Get track
 * @swagger
 * /api/listarCarreras:
 *  get:
 *      summary: Listar las carreras de la base de datos.
 *      tags: [carreras]
 *      response:
 *          200:
 *              description: Todas las carreras
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref:'#/components/schemas/Carreras'
 */    
export default router;