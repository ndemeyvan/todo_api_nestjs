import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { UpdateTaskStatusDto } from "./dto/update-task-status.dto";
import { Task } from "./Entity/task.entity";
import { TasksService } from "./tasks.service";
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getTask(filterDto: GetTaskFilterDto): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getTaskById(id: number): Promise<Task>;
    deleteTaskById(id: number): Promise<void>;
    updateTaskStatus(id: number, updateTaskStatus: UpdateTaskStatusDto): Promise<Task>;
}
