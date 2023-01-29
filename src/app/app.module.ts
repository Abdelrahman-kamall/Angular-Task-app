import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/generic/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
