import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses/course/course.component';
import { ResumeInputComponent } from './resume-input/resume-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ResumeInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
