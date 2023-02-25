import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AddTaskTogglerService } from 'src/app/services/add-task-toggler.service';
import { Task } from 'src/app/Interfaces/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  show : boolean = false;
  subscription! : Subscription;
  addForm! : FormGroup;
  @Output() addTaskEventEmitter : EventEmitter<Task> = new EventEmitter();

  constructor(private togglerService : AddTaskTogglerService){
    this.subscription = togglerService.toggler().subscribe(
      (nextVal) => {this.show = nextVal;}
    );
  }
  

  ngOnInit(){
    this.addForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      date: new FormControl('' ),
      reminder: new FormControl()
    });
  }

  onSubmit(){
    if(this.addForm.invalid){
      this.alertErrors();
    }else{
      let task : Task = this.addForm.value;
      this.addTaskEventEmitter.emit(task);
    }
    this.addForm.reset();
  }

  alertErrors(){
    //console.log(this.addForm)
    let errors : string = "Form : Error \n";
    for(let formcontrol in this.addForm.controls)
      for(let error in this.addForm.controls[formcontrol].errors)
        errors += (formcontrol + " : " + error.toString() +"\n");
      alert(errors);
  }

  OnDestroy(){
    this.subscription.unsubscribe();
  }

  get text() { return this.addForm.get('text')!; }


}
