import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loginInvalid: boolean;

  constructor(
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email:['', Validators.email],
      address: ['', Validators.required],
    });
  }


  onSubmit(): void {

  }

}
