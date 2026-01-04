const express = require("express");
const fs = require("fs"); 

async function getData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.get("/api/posts", async(_, res) => await res.send(await getData('https://jsonplaceholder.typicode.com/posts')));

app.get("/api/post/:id", async(req, res) => await res.send(await getData('https://jsonplaceholder.typicode.com/posts' + '/' + req.params.id)));

app.get("/api/comments", async(_, res) => await res.send(await getData('https://jsonplaceholder.typicode.com/comments')));

app.get("/api/comment/:id", async(req, res) => await res.send(await getData('https://jsonplaceholder.typicode.com/comments' + '/' + req.params.id)));

app.get("/api/marged", async(_, res) => {
    const posts = await getData('https://jsonplaceholder.typicode.com/posts');
    const comments = await getData('https://jsonplaceholder.typicode.com/comments');

    //console.log(comments);
    await posts.map(post => {
        post.comments = comments.filter(comment => comment.postId === post.id);
    });
    res.send(posts);
    
});
app.get("/api/marged/:id", async(req, res) => {
    const post = await getData('https://jsonplaceholder.typicode.com/posts' + '/' + req.params.id);
    const comments = await getData('https://jsonplaceholder.typicode.com/comments');

    post.comments = comments.filter(comment => comment.postId === post.id);

    res.send(post);
    
});
 
app.listen(3000, () => console.log("Сервер ожидает подключения..."));