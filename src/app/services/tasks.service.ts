;import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParamsOptions} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Task } from '../Interfaces/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })  };

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseURL : string = "http://localhost:3000/tasks/"

  constructor(private httpClient : HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.baseURL);
  }

  postTask(task: Task): Observable<Task>{
    return this.httpClient.post<Task>(this.baseURL,task,httpOptions);
  }

  putTask(task: Task): Observable<Task>{
    const url = `${this.baseURL}/${task.id}`;
    return this.httpClient.put<Task>(url,task,httpOptions);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.baseURL}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }
}
