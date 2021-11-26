import { Task, TaskStatus } from "./task.model";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTaskFilterDto } from "./dto/get-task-filter.dto";
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    getTaskById(id: string): Task;
    deleteTask(id: string): void;
    updateTask(id: string, task: Task): Task;
    getTaskByStatus(status: String): Task[];
    getTasksWithFilters(filterDto: GetTaskFilterDto): Task[];
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
