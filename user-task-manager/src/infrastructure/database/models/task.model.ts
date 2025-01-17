import { DataTypes, Model, ModelAttributes } from 'sequelize';
import { ITask } from '../interfaces';
import { DatabaseService } from '../database.service';

export class TaskModel extends Model<ITask> implements ITask {
  declare id: number;
  declare title: string;
  declare description: string;
  declare status: string;
  declare updated_at: Date;
  declare created_at: Date;
  declare user_id: number;
}
  const schema: ModelAttributes<TaskModel> = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  };
TaskModel.init(schema, {
    sequelize: new DatabaseService().getSequelizeInstance(),
    tableName: 'tasks',
    timestamps: false,
});