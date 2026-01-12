import express from 'express';

import PostsControllerSync from '../controllers/commentsControllerSync.js';

const postsRouter = express.Router();

postsRouter.get("/sync",(req, res, next) => PostsControllerSync.getAllComments(req, res, next));

export default postsRouter;

// bind?