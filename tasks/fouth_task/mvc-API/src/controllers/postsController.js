

class PostsController {
    async getAllPosts(req, res) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async getPostById(req, res) {
        const id = req.params.id;
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (response.ok) {
                const post = await response.json();
                res.json(post);
            } else {
                res.status(404).send('Post Not Found');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

export default new PostsController();