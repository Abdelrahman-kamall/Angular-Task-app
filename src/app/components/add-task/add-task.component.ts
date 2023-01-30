import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AddTaskTogglerService } from 'src/app/services/add-task-toggler.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  show : boolean = false;
  subscription! : Subscription;

  constructor(private togglerService : AddTaskTogglerService){
    this.subscription = togglerService.toggler().subscribe(
      (nextVal) => {this.show = nextVal;}
    );
  }
  addForm = new FormGroup({
    text: new FormControl('', Validators.required),
    date: new FormControl('' ),
    reminder: new FormControl()
  });

  onSubmit(){
    //console.log(this.addForm.value);
    //TODO actually add the task
  }

  OnDestroy(){
    this.subscription.unsubscribe();
  }
}
