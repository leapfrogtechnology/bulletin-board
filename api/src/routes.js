/* eslint-disable jsdoc/check-tag-names */

import { Router } from 'express';

import swaggerSpec from './utils/swagger';

import ensureToken from './middlewares/ensureToken';
import validateSuperAdmin from './middlewares/validateSuperAdmin';

import authController from './controllers/auth';
import usersController from './controllers/users';
import bulletinsController from './controllers/bulletins';

/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api/swagger.json.
 */
router.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

/**
 * @swagger
 * definitions:
 *   App:
 *     title: App
 *     type: object
 *     properties:
 *       app:
 *         type: string
 *       apiVersion:
 *         type: string
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get API version
 *     description: App version
 *     produces:
 *       - application/json
 *     tags:
 *       - Base
 *     responses:
 *       200:
 *         description: Application and API version
 *         schema:
 *           title: Users
 *           type: object
 *           $ref: '#/definitions/App'
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

router.use('/', authController);
router.use('/users', ensureToken, validateSuperAdmin, usersController);
router.use('/bulletins', bulletinsController);

export default router;
