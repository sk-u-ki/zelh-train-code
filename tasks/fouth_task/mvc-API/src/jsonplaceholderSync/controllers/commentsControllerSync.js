import DataLoader from '../services/serviceUpload.js';

class CommentsControllerSync {
    async getAllComments(req, res, next) {
        try {
            DataLoader.collectData('https://jsonplaceholder.typicode.com/comments', 'comments');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

export default new CommentsControllerSync();