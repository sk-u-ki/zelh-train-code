import express from 'express';

import postsRouterSync from './jsonplaceholderSync/routers/postsRouterSync.js';
import commentsRouterSync from './jsonplaceholderSync/routers/commentsRouterSync.js';
import commentsRouter from './jsonplaceholder/routers/commentsRouter.js';
import postsRouter from './jsonplaceholder/routers/postsRouter.js';
//import userRouter from './routers/userRouter.js';

const api = express();

api.use('/posts', postsRouterSync);

api.use('/posts', postsRouter);

api.use('/comments', commentsRouterSync);

api.use('/comments', commentsRouter);



//api.use('/user', userRouter);

export default api;