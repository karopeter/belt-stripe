import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AcademyComponent } from './academy/academy.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { InstructorDataComponent } from './student-data/instructor-data.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: StudentsComponent },
  { path: 'enroll', component: AcademyComponent },
  { path: 'student-data', component: StudentDataComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'instructor-data', component: InstructorDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
