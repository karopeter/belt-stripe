import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AcademyComponent } from './academy/academy.component';
import { StudentDataComponent } from './student-data/student-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SidebarComponent,
    AcademyComponent,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
