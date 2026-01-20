import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  signInForm = new FormGroup({
     email: new FormControl('',{validators: [Validators.required]}),
     password: new FormControl('', {validators: [Validators.required]}),
  })

    onSubmit(){
     console.warn(this.signInForm.value);
  }


}
