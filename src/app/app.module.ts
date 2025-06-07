import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TasksComponent } from './shared/tasks/tasks.component';
import { UserComponent } from './shared/user/user.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './shared/tasks/task/task.component';
import { NewTaskComponent } from './shared/tasks/new-task/new-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
