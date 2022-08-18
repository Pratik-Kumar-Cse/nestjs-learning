import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './tasks/database/typeorm-ex.module';
import { TasksRepository } from './tasks/tasks.repository';
import { Task } from './tasks/task.entity';
import { AuthModule } from './auth/auth.module';
import { UsersRepository } from './auth/users.repository';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      entities: [Task, User],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmExModule.forCustomRepository([TasksRepository, UsersRepository]),
    AuthModule,
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule {}
