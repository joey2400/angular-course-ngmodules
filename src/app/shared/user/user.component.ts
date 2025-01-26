import { Component, computed, Input, input, Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from './dummy';
import { CommonModule } from '@angular/common';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Using angular decorators
  // @Input({ required: true }) id!: string;
  // @Input() avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  // Modern ay of using output
  // select = output<string>();

  // Using signals
  // avatar = input<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'users/' + this.avatar());


  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
