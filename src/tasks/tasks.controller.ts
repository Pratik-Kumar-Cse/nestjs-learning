import { Body, Controller, Get, Post, Param, Patch, Query } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  // @Get()
  // getAllTasks(): Task[] {
  //   return this.tasksService.getAllTasks();
  // }

  // @Get()
  // getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWIithFilter(filterDto);
  //   }
  //   return this.tasksService.getAllTasks();
  // }

  // @Post()
  // createTask(@Body() body) {
  //   console.log('body', body);
  // }

  // @Post()
  // createTask(
  //   @Body('title') title: string,
  //   @Body('discription') description: string,
  // ): Task {
  //   // console.log('title', title);
  //   // console.log('discription', description);
  //   return this.tasksService.createTask(title, description);
  // }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }
  // @Post()
  // createTask(@Body() CreateTaskDto: CreateTaskDto): Task {
  //   return this.tasksService.createTask(CreateTaskDto);
  // }

  @Get(':id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTasksById(id);
  }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Post('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   this.tasksService.deleteTask(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() UpdateTaskStatusDto: UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = UpdateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
