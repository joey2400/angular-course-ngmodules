import { Component, computed, Input, input, Output, output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from './dummy';
import { CommonModule } from '@angular/common';
import { using } from 'rxjs';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Using angular decorators
  @Input({ required: true }) id!: string;
  @Input() avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // Modern ay of using output
  // select = output<string>();

  // Using signals
  // avatar = input<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'users/' + this.avatar());


  get imagePath() {
    return 'users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
