import { database }  from '../index.js';


export default async function putData(db, data) {
    database(db)
    .insert(data)
    .then(() => {
        console.log("Data inserted");
    })
}