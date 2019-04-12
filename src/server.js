#!/usr/bin/env node

/* eslint-disable import/order */

import app from './app';
import http from 'http';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('listening', onListening);


function normalizePort(val) {
  const newPort = parseInt(val, 10);

  if (isNaN(newPort)) {
    return val;
  }

  if (newPort > 0) {
    return newPort;
  }

  return false;
}


function onListening() {
  console.log('Server running on port', port);
}
