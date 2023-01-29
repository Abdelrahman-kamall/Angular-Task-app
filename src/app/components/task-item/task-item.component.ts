import { Component, Input } from '@angular/core';
import { Task } from 'src/app/Interfaces/Task';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task! : Task;
  toggled : boolean = false;
  faWindowClose = faWindowClose;

  onClick(){
    console.log("clicked");
  }

  onDblClick(){
    console.log("DBLclicked");
  }

  onDelete(){
    console.log("delete");
  }

}
