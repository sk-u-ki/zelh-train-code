import express from 'express';

import authController from '../controllers/authController.js';
import middleware from '../../middlewares/auth.middleware.js';

const auth = express.Router();

auth.post('/signin', (req, res, next) => authController.login(req, res, next));

auth.post('/signup', (req, res, next) => authController.signup(req, res, next));

export default auth;