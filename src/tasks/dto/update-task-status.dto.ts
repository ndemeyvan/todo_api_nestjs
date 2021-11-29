import { TaskStatus } from "../task.status";
import { IsOptional, IsIn, IsNotEmpty, IsEnum } from "class-validator";

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
  status: TaskStatus;
}