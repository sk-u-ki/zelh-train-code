import express from 'express';

import accountController from '../controllers/accountController.js';

const accountRouter = express.Router();

accountRouter.get('/', (req, res, next) => accountController.getProfile(req, res, next));

accountRouter.post('/profile/update', (req, res, next) => accountController.updateProfile(req, res, next));

export default accountRouter;