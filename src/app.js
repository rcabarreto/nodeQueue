import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

import indexRoutes from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoutes);

export default app;
