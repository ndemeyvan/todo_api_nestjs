import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task.status';
import { CreateTaskDto } from './dto/create-task.dto';
import { title } from 'process';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './Entity/task.entity';
import { TaskRepository } from './repository/task.repository';
import { User } from 'src/auth/entities/user.enty';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  //Get task  by id
  async getTaskById(id: number, user: User): Promise<Task> {
    // const found = await this.taskRepository.findOne(id);
    // Ou
    const found = await this.taskRepository.findOne({ where: { id, user } });

    // if (!found || (found.user.id !== user.id)) { ou
    if (!found || found.user.id !== user.id) {
      throw new NotFoundException(`No task found for the id "${id}"`);
    }

    return found;
  }

  //Create task
  public createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto, user);
  }

  // //delete task
  public async deleteTask(id: number,user:User): Promise<void> {
    const result = await this.taskRepository.delete({id,user});
    if (result.affected === 0) {
      throw new NotFoundException(`No task found with the id "${id}"`);
    }
  }

  // get task with filter
  public async getTasksWithFilters(
    filterDto: GetTaskFilterDto,
    user: User,
  ): Promise<Task[]> {
    const tasks = await this.taskRepository.getTasks(filterDto, user);
    return tasks;
  }

  // //update task status
  public async updateTaskStatus(
    id: number,
    status: TaskStatus,
    user: User,
  ): Promise<Task> {
    const task = await this.getTaskById(id, user); //
    task.status = status;
    await this.taskRepository.save(task);
    return task;
  }

}
