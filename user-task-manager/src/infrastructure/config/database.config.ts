import { Sequelize } from 'sequelize-typescript';
import { config } from 'dotenv';

config();

export const createSequelizeInstance = (): Sequelize => {
  return new Sequelize(
    process.env.DB_DATABASE!,
    process.env.DB_USERNAME!,
    process.env.DB_PASSWORD!,
    {
      logging: false,
      ssl: true,
      dialect: 'postgres',
      port: Number(process.env.DB_PORT),
      replication: {
        read: [{ host: process.env.DB_HOST_READ }],
        write: { host: process.env.DB_HOST },
      },
      pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  );
};
