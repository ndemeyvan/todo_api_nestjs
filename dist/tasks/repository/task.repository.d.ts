import { User } from "src/auth/entities/user.enty";
import { CreateTaskDto } from "src/tasks/dto/create-task.dto";
import { GetTaskFilterDto } from "src/tasks/dto/get-task-filter.dto";
import { Repository } from "typeorm";
import { Task } from "../Entity/task.entity";
export declare class TaskRepository extends Repository<Task> {
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    getTasks(filterDto: GetTaskFilterDto): Promise<Task[]>;
}
