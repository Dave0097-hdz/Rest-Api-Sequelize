import { DataTypes, UUIDV4 } from 'sequelize';
import {sequelize} from '../database/database.js';
import { Task } from './Task.js';

export const Project = sequelize.define('projects', {
    UUID: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING,
    }
})

Project.hasMany(Task, {
    foreignKey: 'projectUUID',
    sourceKey: 'UUID',
})

Task.belongsTo(Project, {
    foreignKey: 'projectUUID',
    targetKey: 'UUID', 
})