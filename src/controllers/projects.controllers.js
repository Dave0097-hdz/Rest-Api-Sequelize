import { Project } from '../models/Project.js';
//import { Task } from '../models/Task.js';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
        console.log(projects);
        res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

export const createProject = async (req, res) => {
    try {
        const { name, priority, description } = req.body;
    
        const newProyect = await Project.create({
            name,
            priority,
            description
        })
    
        console.log(newProyect);
        res.status(201).json(newProyect);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

