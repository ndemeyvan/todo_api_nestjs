import { Injectable, NotFoundException } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import { CreateTaskDto } from "./dto/create-task.dto";
import { title } from "process";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  //get all tasks
  public getAllTasks(): Task[] {
    return this.tasks;
  }

  //create task
  public createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto; //destructuring
    const task: Task = {
      id: Math.random().toString(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }


  //get task by id
  public getTaskById(id: string): Task {
    const found= this.tasks.find((task) => task.id === id);
    if(!found) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return found;
  }

  //delete task
  public deleteTask(id: string): void {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== found.id);
  }

  //update task
  public updateTask(id: string, task: Task): Task {
    const oldTask = this.getTaskById(id);
    oldTask.title = task.title;
    oldTask.description = task.description;
    return oldTask;
  }

  //get task by status
  public getTaskByStatus(status: String): Task[] {
    return this.tasks.filter((task) => task.status === status);
  }

  //get task with filter
  public getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if(status) {
      tasks = this.getTaskByStatus(status);
    }

    if(search){
      tasks = tasks.filter((task) => task.title.includes(search) || task.description.includes(search));
    }

    return tasks;



  }


  //update task status
  public updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}

