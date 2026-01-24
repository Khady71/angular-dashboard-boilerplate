import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';




@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  signUpForm = new FormGroup({
     firstname: new FormControl(''),
     lastname: new FormControl(''),
     email: new FormControl(''),
     password: new FormControl(''),
  })

  onSubmit(){
     console.warn(this.signUpForm.value);
  }
 


}
