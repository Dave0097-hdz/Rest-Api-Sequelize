import {Router} from 'express';
import { getTasks, getTaskByUUID, createTask, updateTask, deleteTask } from '../controllers/task.controllers.js';

const router = Router();

router.get('/tasks', getTasks)
router.post('/tasks/', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)
router.get('/tasks/:UUID', getTaskByUUID)       

export default router;