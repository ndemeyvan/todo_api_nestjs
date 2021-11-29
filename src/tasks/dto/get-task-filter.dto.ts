import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";
import { TaskStatus } from "../task.status";

export class GetTaskFilterDto {
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  search?: string;
}
