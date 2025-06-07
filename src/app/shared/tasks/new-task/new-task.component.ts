import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { TaskService } from '../../../service/task/task.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string
  @Output() close = new EventEmitter<void>();
  enteredTitle = signal('');
  enteredDate = signal('');
  enteredSummary = signal('');
  private taskService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle(),
      date: this.enteredDate(),
      summary: this.enteredSummary()
    }, this.userId);
    this.close.emit();
  }
}
