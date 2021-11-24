import { Body, Controller, Get, Post } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private taskService: TasksService) {}

  // Get all tasks
  @Get()
  public getAllTasks() {
    return this.taskService.getAllTasks();
  }

  // create task
  @Post()
  public createTask(@Body("title") title, @Body("description") description) {
    return this.taskService.createTask(title, description);
  }
}
