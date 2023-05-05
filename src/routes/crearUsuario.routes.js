import { Router } from "express";
import { methods as crearUsuarioController} from "../controllers/WebAdmin/crearUsuario.controller";
const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     usuarios:
 *       type: object
 *       properties:
 *         Id:
 *           type: integer
 *           description: Id del ciclo
 *         Ruta:
 *           type: string
 *           description: Ruta de la imagen del ciclo
 *         Tag:
 *           type: string
 *           description: Tag del ciclo
 *         Imagen:
 *           type: string
 *           description: Imagen del ciclo
 *       required:
 *         - Id
 *         - ruta
 *         - tag
 *         - Imagen
 *       example:
 *         Id: 1
 *         Ruta: ruta/fichero/subfichero
 *         Tag: Crea impacto positivo y trasciende
 *         Imagen: '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RD'
 */

/**
 * Get track
 * @swagger
 * /api/agregarUsuario:
 *  post:
 *      summary: Listar los ciclos.
 *      tags: [usuarios]
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
router.post("/", crearUsuarioController.crearUsuario);

export default router;