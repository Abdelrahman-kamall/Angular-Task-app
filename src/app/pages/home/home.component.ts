import {  Component, ViewChild } from '@angular/core';
import { TaskListComponent } from 'src/app/components/task-list/task-list.component';
import { Task } from 'src/app/Interfaces/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(TaskListComponent) private taskList! : TaskListComponent;

  constructor(){}

  addTask(task: Task): void{
    this.taskList.onAddTask(task);
  }
}
