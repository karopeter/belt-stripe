import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AcademyComponent } from './academy/academy.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InstructorsComponent } from './instructors/instructors.component';
import { EnrollComponent } from './academy/enroll.component';
import { InstructorDataComponent } from './student-data/instructor-data.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SidebarComponent,
    AcademyComponent,
    StudentDataComponent,
    InstructorsComponent,
    EnrollComponent,
    InstructorDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
