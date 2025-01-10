import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { UserComponent } from "./shared/user/user.component";
import { DUMMY_USERS } from './shared/user/dummy';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
  }
}
