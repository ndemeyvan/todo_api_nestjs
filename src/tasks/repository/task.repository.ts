import { User } from "src/auth/entities/user.enty";
import { CreateTaskDto } from "src/tasks/dto/create-task.dto";
import { GetTaskFilterDto } from "src/tasks/dto/get-task-filter.dto";
import { TaskStatus } from "src/tasks/task.status";
import { EntityRepository, Repository } from "typeorm";
import { Task } from "../Entity/task.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  public async createTask(createTaskDto: CreateTaskDto,user:User): Promise<Task> {
    const { title, description } = createTaskDto; //destructuring
    const obj = {
      title,
      description,
      status: TaskStatus.OPEN,
      user
    };
    const task = this.create(obj);
    await this.save(task);
    return task;
  }

  async getTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder("task");

    if (status) {
      query.andWhere("task.status = :status", { status });
    }

    if (search) {
      query.andWhere("LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)", { search :`%${search}%`});
    }
    const tasks = query.getMany();
    return tasks;
  }
}
