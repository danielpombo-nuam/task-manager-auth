import { Injectable } from "@nestjs/common";
import { TaskManagerModelPort } from "src/core-task-manager/application/ports";
import { Task } from "../shared/types";
import { TaskModel } from "../database/models/task.model";

@Injectable()
export class TaskManagerModelAdapter implements TaskManagerModelPort {
    async createTask(task: Task): Promise<Task> {
        return await TaskModel.create(task);
    }

    async getTask(taskId: number): Promise<Task> {
        return await TaskModel.findByPk(taskId);
    }

    async getTasks(): Promise<Task[]> {
        return await TaskModel.findAll();
    }

    async updateTask(taskId: number, task: Task): Promise<Task> {
        await TaskModel.update(task, { where: { id: taskId } });
        return await TaskModel.findByPk(taskId);
    }

    async deleteTask(taskId: number): Promise<void> {
        await TaskModel.destroy({ where: { id: taskId } });
    }
}