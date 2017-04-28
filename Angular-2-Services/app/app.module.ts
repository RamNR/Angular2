import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { EmployeeListComponent } from './employee.list.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent,EmployeeListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
