import { Component, Input , OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {AddTaskTogglerService} from '../../services/add-task-toggler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title! : string;
  color : string = "green";
  text : string = "add";
  toggle! : boolean;
  subscription! : Subscription;
  
  constructor(private togglerService :AddTaskTogglerService ){
    this.subscription = togglerService.toggler().subscribe(
      (nextVal) => {this.toggle = nextVal;}
      );
  }

  OnInit(){
    this.toggle = false;
  }

  onToggle(){
    //console.log("toggled");
    this.togglerService.toggle();
    this.color = (this.toggle ? "red" : "green");
    this.text = (this.toggle ? "Close" : "Add");
  }

  OnDestroy(){
    this.subscription.unsubscribe();
  }

}
