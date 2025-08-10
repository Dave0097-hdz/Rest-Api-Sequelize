import {sequelize} from "../database/database.js";
import { DataTypes } from "sequelize";

export const Task = sequelize.define("task", {
  UUID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }, 
}, {
    timestamps: false
});