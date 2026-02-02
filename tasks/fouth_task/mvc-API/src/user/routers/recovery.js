import express from 'express';

import recoveryController from '../controllers/recoveryController.js';

const recoveryRouter = express.Router();

recoveryRouter.post('/', (req, res, next) => recoveryController.emailResetPassword(req, res, next));

recoveryRouter.post('/recovery/:recoveryId', (req, res, next) => recoveryController.resetPassword(req, res, next));

export default recoveryRouter;