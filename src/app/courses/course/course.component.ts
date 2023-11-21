import { Component, Input ,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Course } from 'src/app/model/Course';
import { __values } from 'tslib';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
[x: string]: any;

 @Input() course!:Course;
 @Output() courseSelected=new EventEmitter<Course>
 @Input() cardIndex!:number
  


 onCourseClick(){
  console.log("clicked")
  this.courseSelected.emit(this.course)
 }
 isImage(){
  return this.course && this.course.iconUrl
 }



}
