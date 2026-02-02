import express from 'express';
import CommentsController from '../controllers/commentsController.js';

const commentsRouter = express.Router();

commentsRouter.get("/",(req, res, next) => CommentsController.getAllComments(req, res, next));

commentsRouter.get("/:id", CommentsController.getCommentById);

export default commentsRouter;
