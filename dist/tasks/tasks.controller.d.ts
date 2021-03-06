import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
import { Task, TaskStatus } from "./task.model";
import { TasksService } from "./tasks.service";
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getTask(filterDto: GetTaskFilterDto): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    getTaskById(id: string): Task;
    deleteTaskById(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
