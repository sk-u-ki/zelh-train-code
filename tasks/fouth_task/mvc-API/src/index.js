import express from 'express';

import postsRouterSync from './jsonplaceholderSync/routers/postsRouterSync.js';
import commentsRouterSync from './jsonplaceholderSync/routers/commentsRouterSync.js';

import commentsRouter from './jsonplaceholder/routers/commentsRouter.js';
import postsRouter from './jsonplaceholder/routers/postsRouter.js';

import authRouter from './user/routers/auth.js';
import accountRouter from './user/routers/account.js';
import recoveryRouter from './user/routers/recovery.js'

import { auth }  from './middlewares/auth.middleware.js';
import { errorRoute, errorHandler } from './middlewares/errorHandler.middleware.js';


const api = express();

api.use(express.json());

api.use('/reset-password', recoveryRouter)

api.use('/auth', authRouter);

api.use(auth);

api.use('/account', accountRouter);

api.use('/posts', postsRouterSync);

api.use('/posts', postsRouter);

api.use('/comments', commentsRouterSync);

api.use('/comments', commentsRouter);

api.use(errorRoute, errorHandler);

export default api;

// Handlebars - emails

// Nodemail

// UUIDv4 - Hash

// localhost:3000/reset/46739402394



