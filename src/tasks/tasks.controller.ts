import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { Task, TaskStatus } from "./task.model";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private taskService: TasksService) {}

  // Get all tasks
  @Get()
  public getTask(@Query() filterDto:GetTaskFilterDto):Task[] {
    if(Object.keys(filterDto).length) {
      return this.taskService.getTasksWithFilters(filterDto);
    } else {
    return this.taskService.getAllTasks();
  }
  }


  // create task
  @Post()
  public createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }
  
 //get task by id
  @Get("/:id")
  public getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }
  //delete task by id
  @Delete("/:id")
  public deleteTaskById(@Param('id') id: string): void {
     this.taskService.deleteTask(id);
  } 

  //update task status
  @Patch("/:id/status")
  public updateTaskStatus(@Param('id') id: string, @Body('status') status: TaskStatus): Task {
    return this.taskService.updateTaskStatus(id, status);
  }


}
