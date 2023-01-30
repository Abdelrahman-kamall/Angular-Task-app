import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddTaskTogglerService {

  constructor() { }
  
  show : boolean = false;
  subject :Subject<boolean> = new Subject();

  toggle(){
    this.show = !this.show;
    this.subject.next(this.show);
  }

  toggler(){
    return this.subject
  }
}
