import { Project } from '../models/Project.js';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

export const getProjectByUUID = async (req, res) => {
    try {
        const UUID = req.params.UUID;

        const project = await Project.findOne({ 
            where: 
            { UUID } 
        });

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        return res.status(200).json(project);
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
    
        res.status(201).json(newProyect);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

export const updateProject = async (req, res) => {
    try {
        const { name, priority, description } = req.body;
        const { UUID } = req.params;

        const project = await Project.findOne({UUID});

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        project.update({
            name,
            priority,
            description
        })
        return res.status(200).json(project);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

export const deleteProject = async (req, res) => {
    try {
        const { UUID } = req.params;

        const project = await Project.findOne({
            UUID
        })

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        await project.destroy(
            { where: { UUID } }
        );

        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}