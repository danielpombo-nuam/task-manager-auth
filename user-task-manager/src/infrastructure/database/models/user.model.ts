import { DataTypes, Model, ModelAttributes } from 'sequelize';
import { IUser } from '../interfaces';
import { DatabaseService } from '../database.service';

export class UserModel extends Model<IUser> implements IUser {
  declare id: number;
  declare username: string;
  declare password: string;
  declare created_at: Date;
  declare updated_at: Date;
}
const schema: ModelAttributes<UserModel> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
  },
};
UserModel.init(schema, {
  sequelize: new DatabaseService().getSequelizeInstance(),
  tableName: 'users',
  timestamps: false,
});