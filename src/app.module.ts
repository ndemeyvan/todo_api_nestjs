import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "task_management",
      autoLoadEntities:true,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  ],
})

export class AppModule {}
