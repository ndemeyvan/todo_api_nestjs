import { Injectable } from "@nestjs/common";
import { Task } from "./task.model";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  //get all tasks
  public getAllTasks(): Task[] {
    return this.tasks;
  }
}
