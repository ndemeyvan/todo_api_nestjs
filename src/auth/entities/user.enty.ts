import { Task } from "src/tasks/Entity/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ unique: true })
  username: String;
  @Column()
  password: String;
  @OneToMany((type) => Task, (task) => task.user,{eager:false})
  task: Task[];
}
