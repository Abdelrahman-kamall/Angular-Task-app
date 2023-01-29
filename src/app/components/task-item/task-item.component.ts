import { Component, ElementRef, Input, ViewChild } 
  from '@angular/core';
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
  timer : any;

  onClick(event : MouseEvent){
    //console.log(event.type);
    const id = (event.target as Element).id
    if(id === "div" || id === "h3" || id ==="p")
      this.timer = setTimeout( () => {this.singleClick();}, 300);
    else
      this.handleDelete();
      

  }

  singleClick(){
    if (!this.timer) return;
    this.toggled = !this.toggled;
  }

  doubleClick(event : MouseEvent){
    clearTimeout(this.timer);
    this.timer = undefined;

    const id = (event.target as Element).id
    if(!(id === "div" || id === "h3" || id ==="p"))
      return;

    //TODO set the reminder
  }

  handleDelete(){
    //TODO handle delete
  }

}
