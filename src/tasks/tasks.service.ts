import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskStatus } from "./task.status";
import { CreateTaskDto } from "./dto/create-task.dto";
import { title } from "process";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./Entity/task.entity";
import { TaskRepository } from "./repository/task.repository";

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) {}

  //Get task  by id
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`No task found for the id "${id}"`);
    }
    return found;
  }

  //Create task
  public createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }


  // //delete task
  public async deleteTask(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`No task found with the id "${id}"`);
    }
  }


  // get task with filter
  public async getTasksWithFilters(filterDto: GetTaskFilterDto): Promise<Task[]>{
    let tasks =await  this.taskRepository.getTasks(filterDto);
    return tasks;

  }

  // //update task status
  public async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);//
    task.status = status;
    await this.taskRepository.save(task)

    return task;
  }
}
