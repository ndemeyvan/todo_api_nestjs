import { TasksService } from "./tasks.service";
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): import("./task.model").Task[];
    createTask(title: any, description: any): import("./task.model").Task;
}
