import express from 'express';

import api from './src/index.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

const response = app.use('/api', api);
app.listen(process.env.PORT ?? 3000, () => console.log("Сервер ожидает подключения..."));