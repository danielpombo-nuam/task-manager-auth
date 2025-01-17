import { Injectable, Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';

import { createSequelizeInstance } from '../config/database.config';

interface ServerTimeResult {
  now: Date;
}

@Injectable()
export class DatabaseService {
  private readonly logger = new Logger(DatabaseService.name);
  private sequelize: Sequelize;

  constructor() {
    this.sequelize = createSequelizeInstance();
    this.initializeDatabase();
  }

  private async initializeDatabase(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      this.logger.log('Conexión a la base de datos establecida correctamente.');
    } catch (err) {
      this.logger.error('No se pudo conectar a la base de datos:', err);
    }
  }

  getSequelizeInstance(): Sequelize {
    return this.sequelize;
  }

  async getServerTime(): Promise<Date> {
    const [result] = await this.sequelize.query<ServerTimeResult>(
      'SELECT NOW() AS now;',
      { type: QueryTypes.SELECT },
    );
    return result?.now ? new Date(result.now) : new Date();
  }
}
