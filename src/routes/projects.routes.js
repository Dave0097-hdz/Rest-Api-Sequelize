import {Router} from 'express';
import { getProjects, getProjectByUUID, createProject, updateProject, deleteProject } from '../controllers/projects.controllers.js';

const router = Router();

router.get('/projects', getProjects)
router.post('/projects', createProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)
router.get('/projects/:UUID', getProjectByUUID)

export default router;