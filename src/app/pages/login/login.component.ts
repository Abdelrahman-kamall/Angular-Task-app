import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  logInForm! : FormGroup;
  isWrongCreds! : boolean;

  get userName() {return this.logInForm.get("userName")!;} 
  get passWord() {return this.logInForm.get("passWord")!;} 

  constructor(private authService : AuthService,private router :Router){

  }
  
  ngOnInit(): void {
    this.logInForm = new FormGroup({
      userName : new FormControl('', [Validators.required]),
      passWord : new FormControl('', [Validators.minLength(5),Validators.required])
    });
    this.isWrongCreds = false;
  }

  onSubmit(data: any): void{
    debugger;
    if(!this.logInForm.valid){
      return;
    }
    this.authService.logIn(this.userName.value, this.passWord.value).subscribe(data => {
      if(data){
        this.router.navigate(["/"])
      }else{
        debugger;
        this.logInForm.reset();
        this.isWrongCreds = true;
      }
    });
  }
}
