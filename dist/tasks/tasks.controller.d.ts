import { User } from "src/auth/entities/user.enty";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { UpdateTaskStatusDto } from "./dto/update-task-status.dto";
import { Task } from "./Entity/task.entity";
import { TasksService } from "./tasks.service";
export declare class TasksController {
    private taskService;
    private logger;
    constructor(taskService: TasksService);
    getTask(filterDto: GetTaskFilterDto, user: User): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    getTaskById(id: number, user: User): Promise<Task>;
    deleteTaskById(id: number, user: User): Promise<void>;
    updateTaskStatus(id: number, updateTaskStatus: UpdateTaskStatusDto, user: User): Promise<Task>;
}
