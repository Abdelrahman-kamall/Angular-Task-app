import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  addForm = new FormGroup({
    text: new FormControl('', Validators.required),
    date: new FormControl('' ),
    reminder: new FormControl()
  });

  onSubmit(){
    console.log(this.addForm.value);
  }
}
