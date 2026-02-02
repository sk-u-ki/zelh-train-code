import express from 'express';
import PostsController from '../controllers/postsController.js';

const postsRouter = express.Router();

postsRouter.get("/",(req, res, next) => PostsController.getAllPosts(req, res, next));

postsRouter.get("/:id",(req, res, next) => PostsController.getPostById(req, res, next));

export default postsRouter;