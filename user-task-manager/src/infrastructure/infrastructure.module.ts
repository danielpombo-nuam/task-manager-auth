import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { DatabaseService } from "./database/database.service";
import { CoreTaskManager } from "src/core-task-manager/task-manager.module";
import * as adapters from "./adapters";
import * as controllers from "./controllers";

@Module({
  imports: [DatabaseModule, CoreTaskManager],
  controllers: Object.values(controllers),
  providers: [DatabaseService, ...Object.values(adapters)],
  exports: [DatabaseService, ...Object.values(adapters)]
})
export class InfrastructureModule {}