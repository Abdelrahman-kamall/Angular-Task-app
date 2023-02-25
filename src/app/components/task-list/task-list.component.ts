import { Component } from '@angular/core';
import {TASKS} from '../../tmp-tasks';
import {Task} from '../../Interfaces/Task';
import { TasksService } from 'src/app/services/tasks.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks : Task[] = [];

  constructor(private tasksService: TasksService){
    
  }

  ngOnInit(){
    this.tasksService.getTasks().subscribe((tasks : Task[]) => this.tasks = tasks);
  }

}
