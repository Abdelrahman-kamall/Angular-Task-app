import { Component, Input , OnInit} from '@angular/core';

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

  OnInit(){
    this.toggle = false;
  }

  onToggle(){
    //console.log("toggled");
    this.toggle = !this.toggle;
    this.color = (this.toggle ? "red" : "green");
    this.text = (this.toggle ? "Close" : "Add");
  }

}
