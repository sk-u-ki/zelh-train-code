import express from 'express';

import postsRouter from './routers/postsRouter.js';

const api = express();

api.use('/', postsRouter);

export default api;