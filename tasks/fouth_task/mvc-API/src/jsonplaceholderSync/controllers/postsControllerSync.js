import DataLoader from '../services/serviceUpload.js';

class PostsControllerSync {
    async getAllPosts(req, res, next) {
        try {
            DataLoader.collectData('https://jsonplaceholder.typicode.com/posts', 'posts');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

export default new PostsControllerSync();