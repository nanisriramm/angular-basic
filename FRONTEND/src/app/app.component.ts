import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  testForm:FormGroup 
constructor(private formBuilder:FormBuilder, private http:HttpClient){
  this.testForm =this.formBuilder.group({
   name:['',Validators.required],
   email:['',Validators.required]
}) 
}
onSubmit(){
  if(this.testForm.valid){
    const formData = this.testForm.value
     this.http.post('${http://localhost:4200}/api/data',formData).
     subscribe(Response => {
      console.log('Data saved successfully:', Response);
      // Reset the form
      this.testForm.reset();
    }, error => {
      console.error('Error:', error);
    });
     }
    
  }
}

