import express from 'express';
import projectsRoutes from './routes/projects.routes.js';
import tasksRoutes from './routes/tasks.routes.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/projects', projectsRoutes);
app.use('/tasks', tasksRoutes);


export default app;