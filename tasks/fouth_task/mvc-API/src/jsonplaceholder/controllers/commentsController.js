import DataLoader from '../services/serviceGet.js';

class CommentsController {
    async getAllComments(req, res, next) {
        console.log("Controller: Getting all comments...");
        res.send(await DataLoader.loadData('comments'));
    }

    async getCommentById(req, res, next) {
        const id = req.params.id;
        console.log("Controller: Getting comment by ID...");
        res.send(await DataLoader.loadData('comments', id));
    }
}

export default new CommentsController();