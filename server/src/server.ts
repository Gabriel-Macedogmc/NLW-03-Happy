import { json } from 'body-parser';
import express from 'express'

import './database/connection';
import router from './routes';

const app = express();

app.use(json());
app.use(router);

app.listen(3333, () => console.log('Server On!'));