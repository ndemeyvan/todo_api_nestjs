import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/auth/decorator/get-user.decorator";
import { User } from "src/auth/entities/user.enty";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { UpdateTaskStatusDto } from "./dto/update-task-status.dto";
import { Task } from "./Entity/task.entity";
import { TasksService } from "./tasks.service";
import { Logger } from '@nestjs/common';


@Controller("tasks")
@UseGuards(AuthGuard())
export class TasksController {
  private logger = new Logger('TasksController');
  constructor(private taskService: TasksService) {}

  // Get all tasks
  @Get()
  public getTask(@Query() filterDto:GetTaskFilterDto,@GetUser() user:User): Promise<Task[]> {
    this.logger.verbose(`User ${user.username} retrieving all tasks. Filters: ${JSON.stringify(filterDto)}`);
    return this.taskService.getTasksWithFilters(filterDto,user)
  }

  // create task
  @Post()
  public createTask(@Body() createTaskDto: CreateTaskDto,@GetUser() user:User): Promise<Task> {
    this.logger.verbose(`User ${user.username} creating a new task. Data: ${JSON.stringify(createTaskDto)}`);
    return this.taskService.createTask(createTaskDto,user);
  }
  
  //get task by id
  @Get("/:id")
  public getTaskById(@Param('id') id: number,@GetUser() user:User): Promise<Task> {
    return this.taskService.getTaskById(id,user);
  }


  //delete task by id
  @Delete("/:id")
  public deleteTaskById(@Param('id') id: number,@GetUser() user:User): Promise<void>  {
     return this.taskService.deleteTask(id,user);
  } 

  //update task status
  @Patch("/:id/status")
  public updateTaskStatus(@Param('id') id: number, @Body() updateTaskStatus: UpdateTaskStatusDto,@GetUser() user:User): Promise<Task> {
    return this.taskService.updateTaskStatus(id, updateTaskStatus.status,user);
  }


}
