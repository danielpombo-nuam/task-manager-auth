import { Controller, Post, Inject, Body, Res, HttpStatus, Get, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import { TASK_MANAGER_SERVICE } from 'src/core-task-manager/task-manager.module';
import { TaskManagerServicePort } from 'src/core-task-manager/application/ports';

@Controller('/tasks')
// @UseGuards(JwtAuthGuard)
export class TaskManagerController {
    constructor(
        @Inject(TASK_MANAGER_SERVICE)
        private taskManagerServicePort: TaskManagerServicePort,
    ) {}
    
    @Post('')
    public async createTask(
        @Body() body: any,
        @Res() res: Response,
    ): Promise<Response> {
        const response = await this.taskManagerServicePort.createTask(body);
    
        return res.status(HttpStatus.CREATED).json(response);
    }

    @Get('')
    public async getTasks(
        @Res() res: Response,
    ): Promise<Response> {
        const response = await this.taskManagerServicePort.getTasks();
    
        return res.status(HttpStatus.OK).json(response);
    }

    @Get('/:taskId')
    public async getTask(
        @Param('taskId') taskId: number,
        @Res() res: Response,
    ): Promise<Response> {
        const response = await this.taskManagerServicePort.getTask(taskId);
    
        return res.status(HttpStatus.OK).json(response);
    }

    @Put('/:taskId')
    public async updateTask(
        @Body() body: any,
        @Param('taskId') taskId: number,
        @Res() res: Response,
    ): Promise<Response> {
        const response = await this.taskManagerServicePort.updateTask(taskId,body);
    
        return res.status(HttpStatus.OK).json(response);
    }

    @Delete('/:taskId')
    public async deleteTask(
        @Param('taskId') taskId: number,
        @Res() res: Response,
    ): Promise<Response> {
        const response = await this.taskManagerServicePort.deleteTask(taskId);
    
        return res.status(HttpStatus.OK).json(response);
    }
}