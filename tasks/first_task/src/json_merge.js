import { writeFile } from 'fs';
async function getData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function main() {
    
    console.log("Начинаем получение данных...");
    const posts = await getData('https://jsonplaceholder.typicode.com/posts');
    const comments = await getData('https://jsonplaceholder.typicode.com/comments');
    
    let output = posts
    

    for (const post in posts) {
        let comments_data = [];
        for (const comment in comments) {
            if (comments[comment]["postId"] === posts[post]["id"]) {
                comments_data.push(comments[comment]);
            }
        output[post]["comments"] = comments_data;
        }
    }
    writeFile('tasks/first_tasks/outputs/output_js.json', JSON.stringify(output, null, 2), (err) => {
        if (err) {
            console.error(err);
        }
    });
}

async function main1() {
    
    console.log("Начинаем получение данных...");
    const posts = await getData('https://jsonplaceholder.typicode.com/posts');
    const comments = await getData('https://jsonplaceholder.typicode.com/comments');


    // console.log(comments);
    posts.map(post => {
        post.comments = comments.filter(comment => comment.postId === post.id);
    });
    console.log(posts)
}

main1()