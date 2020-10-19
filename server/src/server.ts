import { json } from 'body-parser';
import express from 'express'

import './database/connection';

const app = express();

app.use(json());

app.get('/', (req, res) => {
    res.json({menssage: "ola API"})
})

app.listen(3333, () => console.log('Server On!'));