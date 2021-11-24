import { Controller,Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService:TasksService) {}
    
    // Get all tasks
    @Get()
    public getAllTasks() {
        return this.taskService.getAllTasks();
    }




}
