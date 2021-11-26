"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_model_1 = require("./task.model");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    createTask(createTaskDto) {
        const { title, description } = createTaskDto;
        const task = {
            id: Math.random().toString(),
            title,
            description,
            status: task_model_1.TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }
    getTaskById(id) {
        return this.tasks.find((task) => task.id === id);
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    updateTask(id, task) {
        const oldTask = this.getTaskById(id);
        oldTask.title = task.title;
        oldTask.description = task.description;
        return oldTask;
    }
    getTaskByStatus(status) {
        return this.tasks.filter((task) => task.status === status);
    }
    getTasksWithFilters(filterDto) {
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = this.getTaskByStatus(status);
        }
        if (search) {
            tasks = tasks.filter((task) => task.title.includes(search) || task.description.includes(search));
        }
        return tasks;
    }
    updateTaskStatus(id, status) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map