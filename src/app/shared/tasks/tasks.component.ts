import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../service/task/dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  // @Input() name: string | undefined;
  isAddingTask: boolean = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return
  }

  onCompleteTask(id: string) {

  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {

    this.isAddingTask = false;
  }

}
