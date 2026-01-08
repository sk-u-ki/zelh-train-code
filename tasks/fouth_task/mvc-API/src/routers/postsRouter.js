import express from 'express';

import PostsController from '../controllers/postsController.js';

const postsRouter = express.Router();

postsRouter.get("/posts", PostsController.getAllPosts);

postsRouter.get("/post/:id", PostsController.getPostById);

export default postsRouter;