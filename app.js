'use strict';
import express, {
  json
} from 'express';
import cors from 'cors';
import {
  routes
} from './src/routes/productRoutes.js';

const app = express();
let port = 5462;

app.use(json());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log('app listening on url http://localhost:' + port)
});