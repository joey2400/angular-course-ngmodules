import { Component, computed, Input, input } from '@angular/core';
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
  // @Input() avatar!: string;
  // @Input({ required: true }) name!: string;
  avatar = input<string>();
  name = input.required<string>();

  // get imagePath() {
  //   return 'users/' + this.avatar;
  // }
  imagePath = computed(() => 'users/' + this.avatar())
}
