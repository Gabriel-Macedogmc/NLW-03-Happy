import { json } from 'body-parser';
import express from 'express'
import path from 'path'
import 'express-async-errors'
import cors from 'cors'

import './database/connection';

import router from './routes';
import errorHandle from './errors/handle'

const app = express();

app.use(json());
app.use(cors)
app.use(router);
app.use(errorHandle);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333, () => console.log('Server On!'));