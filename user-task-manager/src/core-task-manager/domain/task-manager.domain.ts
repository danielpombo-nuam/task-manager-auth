import { TaskManagerDomainPort } from "../application/ports";
import { Task } from "../../infrastructure/shared/types";

export class TaskManagerDomain implements TaskManagerDomainPort {
    constructor(
        private taskManagerModelPort: TaskManagerDomainPort
    ) {}

    async createTask(task: Task): Promise<Task> {
        const _task = await this.taskManagerModelPort.createTask(task);
        return _task;
    }

    async getTask(taskId: number): Promise<Task> {
        const task = await this.taskManagerModelPort.getTask(taskId);
        return task;
    }

    async getTasks(): Promise<Task[]> {
        const tasks = await this.taskManagerModelPort.getTasks();
        return tasks;
    }

    async updateTask(taskId: number, task: Task): Promise<Task> {
        const _task = await this.taskManagerModelPort.updateTask(taskId, task);
        return _task;
    }

    async deleteTask(taskId: number): Promise<void> {
        await this.taskManagerModelPort.deleteTask(taskId);
        return;
    }
}