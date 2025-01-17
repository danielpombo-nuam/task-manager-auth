import { Task } from "../../../infrastructure/shared/types/task";

export interface TaskManagerServicePort {
    createTask(task: Task): Promise<Task>;
    getTask(taskId: number): Promise<Task>;
    getTasks(): Promise<Task[]>;
    updateTask(taskId: number, task: Task): Promise<Task>;
    deleteTask(taskId: number): Promise<void>;
}