import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { UpdateTaskStatusDto } from "./dto/update-task-status.dto";
import { Task } from "../Entity/task.entity";
import { TaskStatus } from "./task.status";
import { TasksService } from "./tasks.service";

@Controller("tasks")
export class TasksController {
  constructor(private taskService: TasksService) {}

//   // Get all tasks
  @Get()
  public getTask(@Query() filterDto:GetTaskFilterDto): Promise<Task[]> {
    
    return this.taskService.getTasksWithFilters(filterDto)
  }

  // create task
  @Post()
  public createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }
  
//get task by id
  @Get("/:id")
  public getTaskById(@Param('id') id: number): Promise<Task> {
    return this.taskService.getTaskById(id);
  }


   //delete task by id
  @Delete("/:id")
  public deleteTaskById(@Param('id') id: number): Promise<void>  {
     return this.taskService.deleteTask(id);
  } 

//   //update task status
  @Patch("/:id/status")
  public updateTaskStatus(@Param('id') id: number, @Body() updateTaskStatus: UpdateTaskStatusDto): Promise<Task> {
    return this.taskService.updateTaskStatus(id, updateTaskStatus.status);
  }


}
