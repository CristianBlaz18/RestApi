import { Router } from "express";
import { methods as listarSedesController } from "../controllers/Movil/listarSedes.controller";
const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     sedes:
 *       type: object
 *       properties:
 *         ID:
 *           type: integer
 *           description: Id de la sede
 *         NombreSede:
 *           type: string
 *           description: Nombre de la sede
 *         Ruta:
 *           type: string
 *           description: Ruta de la imagen de la sede
 *         Imagen:
 *           type: string
 *           description: Imagen de la sede
 *       required:
 *         - Id
 *         - NombreSede
 *         - Ruta
 *         - Imagen
 *       example:
 *         Id: 1
 *         Nombre: Huancayo
 *         Ruta: /home/opc/DB_Green_multimedia/Imagenes_int/sedes/sede_huancayo.png
 *         Imagen: '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RD'
 */

/**
 * Get track
 * @swagger
 * /api/listarSedes:
 *  get:
 *      summary: Listar las sedes.
 *      tags: [sedes]
 *      responses:
 *          200:
 *              description: Todas las carreras
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref:'#/components/schemas/Carreras'
 */   
router.get("/", listarSedesController.getSedes);
export default router;