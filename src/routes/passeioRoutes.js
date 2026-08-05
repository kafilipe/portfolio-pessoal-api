const express = require('express');
const passeioController = require('../controllers/passeioController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /passeios:
 *   get:
 *     summary: Listar passeios
 *     responses:
 *       200:
 *         description: Lista de passeios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Passeio'
 *   post:
 *     summary: Criar passeio
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PasseioInput'
 *     responses:
 *       201:
 *         description: Passeio criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Passeio'
 *       403:
 *         description: Acesso não autorizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 * /passeios/{id}:
 *   get:
 *     summary: Buscar passeio por id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Passeio encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Passeio'
 *       404:
 *         description: Passeio não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/', passeioController.listPasseios);
router.get('/:id', passeioController.getPasseioById);
router.post('/', authMiddleware('admin'), passeioController.createPasseio);

module.exports = router;
