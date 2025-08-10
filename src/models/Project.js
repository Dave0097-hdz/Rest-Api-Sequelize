import { UUID, DataTypes } from 'sequelize';
import {sequelize} from '../database/database.js';
import { Task } from './Task.js';

export const Proyect = sequelize.define('projects', {
    UUID: {
        type: DataTypes.UUID,
        defaultValue: UUID.v4,
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

Proyect.hasMany(Task, {
    foreignKey: 'projectUUID',
    sourceKey: 'UUID',
})

Task.belongsTo(Proyect, {
    foreignKey: 'projectUUID',
    targetKey: 'UUID', 
})