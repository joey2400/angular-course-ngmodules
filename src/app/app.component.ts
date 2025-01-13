import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { UserComponent } from "./shared/user/user.component";
import { DUMMY_USERS } from './shared/user/dummy';
import { TasksComponent } from "./shared/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId: string = 'u1';

  get selectedUser() {
    return this.users.find((user: any) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
