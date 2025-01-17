import { Module, Type, DynamicModule } from '@nestjs/common';
import { TaskManagerDomain, UserDomain } from './domain';
import { TaskManagerService, UserService } from './application/services';
import { TaskManagerModelAdapter, UserModelAdapter } from '../infrastructure/adapters';
import { DatabaseService } from '../infrastructure/database/database.service';

export type coreModuleOptions = {
    modules: Type[];
    adapters: {
        taskManagerModelAdapter: TaskManagerModelAdapter;
        userModelAdapter: UserModelAdapter
    };
};

export const TASK_MANAGER_DOMAIN = 'TaskManagerDomain';
export const TASK_MANAGER_SERVICE = 'TaskManagerService';
export const USER_DOMAIN = 'UserDomain';
export const USER_SERVICE = 'UserService';

@Module({
    providers: [TaskManagerService,UserService],
})
export class CoreTaskManager {
    static register({ modules, adapters }: coreModuleOptions): DynamicModule {
        const { taskManagerModelAdapter, userModelAdapter } = adapters;

        const taskManagerServiceProvider = {
            provide: TASK_MANAGER_SERVICE,
            useFactory(
                taskManagerDomain: TaskManagerDomain,
                databaseService: DatabaseService,
            ) {
                return new TaskManagerService(
                    taskManagerDomain,
                );
            },
            inject: [TASK_MANAGER_DOMAIN, DatabaseService],
        };

        const taskManagerDomainProvider = {
            provide: TASK_MANAGER_DOMAIN,
            useFactory(
                taskManagerModelAdapter: TaskManagerModelAdapter,
            ) {
                return new TaskManagerDomain(taskManagerModelAdapter);
            },
            inject: [
                TaskManagerModelAdapter,
            ],
        };

        const userServiceProvider = {
            provide: USER_SERVICE,
            useFactory(
                userDomain: UserDomain,
                databaseService: DatabaseService,
            ) {
                return new UserService(
                    userDomain,
                );
            },
            inject: [USER_DOMAIN, DatabaseService],
        };

        const userDomainProvider = {
            provide: USER_DOMAIN,
            useFactory(
                userModelAdapter: UserModelAdapter,
            ) {
                return new UserDomain(userModelAdapter);
            },
            inject: [
                UserModelAdapter,
            ],
        };

    return {
        module: CoreTaskManager,
        global: true,
        imports: [...modules],
        providers: [taskManagerDomainProvider, taskManagerServiceProvider, userDomainProvider, userServiceProvider],
        exports: [TASK_MANAGER_SERVICE, USER_SERVICE],
    };
    }
}