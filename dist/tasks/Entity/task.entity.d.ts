import { User } from 'src/auth/entities/user.enty';
import { TaskStatus } from '../task.status';
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    user: User;
}
