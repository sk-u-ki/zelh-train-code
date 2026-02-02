import express from 'express';

import authController from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/sign-in', (req, res, next) => authController.signin(req, res, next));

authRouter.post('/sign-up', (req, res, next) => authController.signup(req, res, next));

export default authRouter;