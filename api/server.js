// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./project/router.js');
const resourcesRouter = require('./resource/router.js');
const tasksRouter = require('./task/router.js');

const server = express()

server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);



server.get("/", (req, res) => {
    res.status(200).json( "Hello from the API" )
  })

module.exports = server