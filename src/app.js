import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';

import indexRoutes from './routes/index';
import queueRoutes from './routes/queue';
import stackRoutes from './routes/stack';

dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/queue', queueRoutes);
app.use('/stack', stackRoutes);

export default app;
