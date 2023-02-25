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

  onDelete(task: Task) : void{
    this.tasksService.deleteTask(task).subscribe(
        () => this.tasks = this.tasks.filter((t) => t.id !== task.id));
  }

  onReminder(task: Task) : void{
    this.tasksService.putTask(task).subscribe();
  }

  onAddTask(task: Task){
    // or else it will have no id untill i refresh and retrieve it again
    this.tasksService.postTask(task).subscribe((taskWithId) => this.tasks.push(taskWithId));
  }
}
