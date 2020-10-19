import { json } from 'body-parser';
import express from 'express'

const app = express();

app.use(json());

app.listen(3333, () => console.log('Server On!'));