import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { CoreTaskManager } from './core-task-manager/task-manager.module';
import { TaskManagerModelAdapter } from './infrastructure/adapters';
import { UserModelAdapter } from './infrastructure/adapters/user-model.adapter';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    InfrastructureModule,
    AuthModule,
    CoreTaskManager.register({
      modules: [InfrastructureModule],
      adapters: {
        taskManagerModelAdapter: new TaskManagerModelAdapter,
        userModelAdapter: new UserModelAdapter,
      },
    }),
  ],
})
export class AppModule {}
