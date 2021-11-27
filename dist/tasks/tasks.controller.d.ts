import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { UpdateTaskStatusDto } from "./dto/update-task-status.dto";
import { Task } from "./task.model";
import { TasksService } from "./tasks.service";
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getTask(filterDto: GetTaskFilterDto): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    getTaskById(id: string): Task;
    deleteTaskById(id: string): void;
    updateTaskStatus(id: string, updateTaskStatus: UpdateTaskStatusDto): Task;
}
