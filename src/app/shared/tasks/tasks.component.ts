import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from '../../service/task/task.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  // @Input() name: string | undefined;
  isAddingTask: boolean = false;

  private taskService = inject(TaskService);

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

}
