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
  addForm! : FormGroup;

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
      //TODO actually add the task
    }
    //console.log(this.addForm.value);
    
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
