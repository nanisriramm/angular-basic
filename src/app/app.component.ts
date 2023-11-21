import { Component, ElementRef, Input, ViewChild,AfterViewInit ,ViewChildren, QueryList} from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/Course';
import { CourseComponent } from './courses/course/course.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title="Nani"  
 courses:Course[]=COURSES  

 coreCourse=COURSES[0]
 rxjsCourse=COURSES[1]
 javaCourse=COURSES[2]

@ViewChild('cardref1',{read:ElementRef}) card1!:ElementRef
@ViewChild('card2') card2!:CourseComponent
@ViewChild('card3') containerDiv!:ElementRef

@ViewChildren(CourseComponent,{read:ElementRef}) 
image!:QueryList<CourseComponent>;



  ngAfterViewInit() {
    this.image.changes.subscribe(
      cards=>console.log(cards)
    )}
    

 onCourseSelect(course:Course){
  console.log(this.card1)
  console.log(this.card2)
  console.log(this.containerDiv)
 
}
add(){
  this.courses.push({
    id: 1,
    description: "Angular Core Deep Dive",
    iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
    longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
    lessonsCount: 10,
    category: 'INTERMEDIATE'
},)
}
}
