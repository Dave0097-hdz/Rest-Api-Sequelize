import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';

export const getTasks = async (req, res) => {
    try {
        const task = await Task.findAll()
        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

export const getTaskByUUID = async (req, res) => {
    try {
        const UUID = req.params.UUID;

        const task = await Task.findOne({ 
            where: {
                UUID: UUID
            }
        });
        return res.status(200).json(task);
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: error.message });
    }
}

export const createTask = async (req, res) => {
    try {
        const { name, done, projectUUID} = req.body;

        const task = await Project.findOne({
            where: { UUID: projectUUID }
        })

        if (!task) {
            return res.status(404).json({ message: 'Project not found' });
        }
    
        const newTask = await Task.create({
            name,
            done,
            projectUUID
        })
    
        res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const { name, done } = req.body;
        const { UUID } = req.params;

        const task = await Task.findOne({ where: UUID  });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.update(
            { name, done },
        );

        return res.status(200).json({ message: 'Update Task Successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}


export const deleteTask = async (req, res) => {
    try {
        const { UUID } = req.params;

        const task = await Task.findOne({ where: { UUID } });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.destroy();

        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};
