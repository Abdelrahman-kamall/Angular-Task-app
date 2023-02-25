import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  logInForm! : FormGroup;
  get userName() {return this.logInForm.get("userName")!;} 
  get passWord() {return this.logInForm.get("passWord")!;} 
  
  ngOnInit(): void {
    this.logInForm = new FormGroup({
      userName : new FormControl('', [Validators.required]),
      passWord : new FormControl('', [Validators.minLength(8),Validators.required])
    });
  }

  onSubmit(): void{
    console.log(this.logInForm.value);
  }
}
