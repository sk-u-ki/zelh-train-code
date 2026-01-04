
async function getData(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

console.error(await getData('http://localhost:3000/api/users'));