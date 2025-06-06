import { Injectable } from '@angular/core';
import { dummyTasks } from './dummy-tasks';
import { NewTaskData } from '../../shared/tasks/task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = dummyTasks

  constructor() { }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
