import express from 'express';


import api from './src/index.js';

const app = express();

app.use('/api', api);

app.listen(3000, () => console.log("Сервер ожидает подключения..."));