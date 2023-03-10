import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/generic/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

const routes : Routes = [
  {path:''  , redirectTo: "home", pathMatch: "full"},
  {path:'home'  , component: HomeComponent, canActivate:[LoginGuardGuard]},
  {path:'about' , component: AboutComponent, canActivate:[LoginGuardGuard]},
  {path:'help' , component: HelpComponent, canActivate:[LoginGuardGuard]},
  {path:'login' , component: LoginComponent, canActivate:[LoginGuardGuard]},
  {path:'logout' , component: LogoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    TaskListComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    HelpComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
