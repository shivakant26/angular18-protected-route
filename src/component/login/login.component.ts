import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule , ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private router : Router){}

  loginform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  login() {
    if (
      this.loginform.value.email === 'admin@gmail.com' &&
      this.loginform.value.password === '112233'
    ){
      Swal.fire({
        title: "Sucess",
        text: "Logged in User Successfully",
        icon: "success"
      });
      localStorage.setItem("token","my-hard-token123")
      this.router.navigateByUrl("/profile")
    }else{
      Swal.fire({
        title: "Error",
        text: "Wrong credential Email/password",
        icon: "error"
      });
    }
      
  }
}
