import DataLoader from '../services/serviceGet.js';

class CommentsController {
    async getAllComments(req, res) {
        console.log("Controller: Getting all comments...");
        res.send(await DataLoader.loadData('comments'));
    }

    async getCommentById(req, res) {
        const { id : commentId } = req.params;
        console.log("Controller: Getting comment by ID...");
        res.send(await DataLoader.loadData('comments', commentId));
    }
}

export default new CommentsController();