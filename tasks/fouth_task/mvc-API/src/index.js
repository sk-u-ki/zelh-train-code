import express from 'express';

import postsRouterSync from './jsonplaceholderSync/routers/postsRouterSync.js';
import commentsRouterSync from './jsonplaceholderSync/routers/commentsRouterSync.js';

import commentsRouter from './jsonplaceholder/routers/commentsRouter.js';
import postsRouter from './jsonplaceholder/routers/postsRouter.js';

import authRouter from './user/routers/auth.js';

import { auth }  from './middlewares/auth.middleware.js';


const api = express();

api.use('/auth', authRouter);

api.use(auth);

api.use('/posts', postsRouterSync);

api.use('/posts', postsRouter);

api.use('/comments', commentsRouterSync);

api.use('/comments', commentsRouter);

export default api;