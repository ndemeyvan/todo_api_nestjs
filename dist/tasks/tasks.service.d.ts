import { TaskStatus } from "./task.status";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { Task } from "./Entity/task.entity";
import { TaskRepository } from "./repository/task.repository";
import { User } from "src/auth/entities/user.enty";
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    deleteTask(id: number): Promise<void>;
    getTasksWithFilters(filterDto: GetTaskFilterDto): Promise<Task[]>;
    updateTaskStatus(id: number, status: TaskStatus): Promise<Task>;
}
