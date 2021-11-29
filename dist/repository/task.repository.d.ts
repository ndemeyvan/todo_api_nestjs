import { CreateTaskDto } from "src/tasks/dto/create-task.dto";
import { GetTaskFilterDto } from "src/tasks/dto/get-task-filter.dto";
import { Repository } from "typeorm";
import { Task } from "../tasks/Entity/task.entity";
export declare class TaskRepository extends Repository<Task> {
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getTasks(filterDto: GetTaskFilterDto): Promise<Task[]>;
}
