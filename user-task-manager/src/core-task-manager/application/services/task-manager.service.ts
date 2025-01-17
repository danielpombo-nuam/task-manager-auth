import { TaskManagerDomainPort, TaskManagerServicePort } from "../ports";
import { Task } from "../../../infrastructure/shared/types/task";

export class TaskManagerService implements TaskManagerServicePort {
    constructor(private readonly taskManagerDomainPort: TaskManagerDomainPort) {}

    async createTask(task: Task): Promise<Task> {
        return this.taskManagerDomainPort.createTask(task);
    }

    async getTask(taskId: number): Promise<Task> {
        return this.taskManagerDomainPort.getTask(taskId);
    }

    async getTasks(): Promise<Task[]> {
        return this.taskManagerDomainPort.getTasks();
    }

    async updateTask(taskId: number, task: Task): Promise<Task> {
        return this.taskManagerDomainPort.updateTask(taskId, task);
    }

    async deleteTask(taskId: number): Promise<void> {
        return this.taskManagerDomainPort.deleteTask(taskId);
    }
}