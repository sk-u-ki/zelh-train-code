import express from 'express';

import PostsControllerSync from '../controllers/postsControllerSync.js';

const postsRouter = express.Router();

postsRouter.get("/sync",(req, res, next) => PostsControllerSync.getAllPosts(req, res, next));

export default postsRouter;

// bind?