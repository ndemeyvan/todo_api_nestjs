import { Exclude } from 'class-transformer';
import { User } from 'src/auth/entities/user.enty';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../task.status';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  status: TaskStatus;
  @ManyToOne((type) => User, (user) => user.task, { eager: true })
  @Exclude({ toPlainOnly: true })
  user: User;
}
