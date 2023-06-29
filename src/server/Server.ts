import express from 'express';
import path from 'path';
import ejs from 'ejs';

import 'dotenv/config';

import { router } from './routes/index';

const server = express();

server.engine('html', ejs.renderFile);
server.set('view engine', 'html');
server.set('views', path.join(__dirname, '../pages'));

server.use(express.json());
server.use(router);
server.use('/pages', express.static(path.join(__dirname, '../pages')));

export { server }; 
