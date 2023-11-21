import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume-input',
  templateUrl: './resume-input.component.html',
  styleUrls: ['./resume-input.component.css']
})
export class ResumeInputComponent {
 email:string="";
 name:string='';

 add(ip:{email:string,name:string}){
  this.email=ip.email;
  this.name=ip.name

 }
}
