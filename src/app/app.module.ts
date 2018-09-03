import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjecttodoComponent } from './projecttodo/projecttodo.component';
import { CommontodoComponent } from './commontodo/commontodo.component';
import { GroceryComponent } from './grocery/grocery.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DashboardComponent,
    ProjecttodoComponent,
    CommontodoComponent,
    GroceryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
