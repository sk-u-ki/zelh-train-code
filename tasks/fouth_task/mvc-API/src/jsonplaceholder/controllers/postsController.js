import DataLoader from '../services/serviceGet.js';

class PostsController {
    async getAllPosts(req, res, next) {
        console.log("Controller: Getting all posts...");
        res.send(await DataLoader.loadData('posts'));
    }

    async getPostById(req, res, next) {
        const id = req.params.id;
        console.log("Controller: Getting post by ID...");
        res.send(await DataLoader.loadData('posts', id));
    }
}

export default new PostsController();