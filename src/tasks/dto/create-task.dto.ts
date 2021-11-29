import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto{
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
}