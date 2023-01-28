import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text! : string;
  @Input() color! : string;
  @Output() clickEmitter : EventEmitter<any> = new EventEmitter();

  onclick(){
    //console.log("click emitted");
    this.clickEmitter.emit();
  }

}
