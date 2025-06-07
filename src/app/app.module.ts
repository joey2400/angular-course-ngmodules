import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TasksComponent } from './shared/tasks/tasks.component';
import { UserComponent } from './shared/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HeaderComponent,
    TasksComponent,
    UserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
