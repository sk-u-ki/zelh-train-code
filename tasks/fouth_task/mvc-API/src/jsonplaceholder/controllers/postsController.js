import DataLoader from '../services/serviceGet.js';

class PostsController {
    async getAllPosts(req, res) {
        console.log(req.user);
        res.send(await DataLoader.loadData('posts'));
    }

    async getPostById(req, res) {
        const {id: postId} = req.params;
        console.log("Controller: Getting post by ID...");
        res.send(await DataLoader.loadData('posts', postId));
    }
}

export default new PostsController();