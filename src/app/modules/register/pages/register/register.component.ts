import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/models/employee';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../../../core/services/employee/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loginInvalid: boolean;
  employee: Employee;
  constructor(
    private fb: FormBuilder,
    private registerService: EmployeeService
  ) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
    });
  }


  onSubmit(): void {
    this.fillEmployeeData();
    this.registerService.registerEmployee(this.employee).subscribe(
      (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: data.message,
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong while registering employee'
        });
      });
  }


  private fillEmployeeData() {
    this.employee = new Employee();
    this.employee.name = this.form.get('name').value;
    this.employee.surname = this.form.get('surname').value;
    this.employee.username = this.form.get('username').value;
    this.employee.password = this.form.get('password').value;
    delete this.employee.roles;
  }
}
