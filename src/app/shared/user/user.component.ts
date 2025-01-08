import { Component, Input } from '@angular/core';
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
  @Input() avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return 'users/' + this.avatar;
  }
}
