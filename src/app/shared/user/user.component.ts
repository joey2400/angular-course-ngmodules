import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy';
import { CommonModule } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  birthday = new Date(1983, 3, 15)

  imagePath = computed(() => 'users/' + this.selectedUser().avatar)

  // get imagePath() {
  //   return 'users/' + this.selectedUser.avatar
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
