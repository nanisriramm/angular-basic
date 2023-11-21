import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';

let counter = 0;

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
 
id!:number
  constructor(private http:HttpClient) { 
    
    counter++;
    this.id=counter
  }
  loadCourses():Observable<Course[]>{
    const params = new HttpParams()
  .set("page",1).set("pageSize",10)  
return this.http.get<Course[]>('api/courses',{params});

}

}
