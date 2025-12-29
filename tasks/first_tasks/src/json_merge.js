import { writeFileSync } from 'fs';
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
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
    writeFileSync('tasks/first_tasks/outputs/output_js.json', JSON.stringify(output, null, 2));

}

main()