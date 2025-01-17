import { Task } from "../../../infrastructure/shared/types";

export interface TaskManagerDomainPort {
    createTask(task: Task): Promise<Task>;
    getTask(taskId: number): Promise<Task>;
    getTasks(): Promise<Task[]>;
    updateTask(taskId: number, task: Task): Promise<Task>;
    deleteTask(taskId: number): Promise<void>;
}