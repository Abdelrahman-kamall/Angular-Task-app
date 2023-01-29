import { Component } from '@angular/core';
import {TASKS} from '../../tmp-tasks';
import {Task} from '../../Interfaces/Task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks : Task[] = TASKS;

  stringify(task :Task) : string{
    return JSON.stringify(task);
  }
}
