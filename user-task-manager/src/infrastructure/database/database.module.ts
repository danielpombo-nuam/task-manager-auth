import { Module } from '@nestjs/common';

import { DatabaseService } from './database.service';
import * as models from './models';

@Module({
  imports: Object.values(models),
  providers: [DatabaseService],
  exports: [DatabaseService, ...Object.values(models)],
})
export class DatabaseModule {}