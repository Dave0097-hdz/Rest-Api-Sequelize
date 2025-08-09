import { Sequelize } from "sequelize";


export const sequelize = new Sequelize(
    'projects_db', 
    'postgres', 
    'root', 
    {
    host: 'localhost',
    dialect: 'postgres'
})

export default sequelize;