import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../../../service/task/task.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
