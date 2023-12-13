import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth2.service';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.component.html',
  styleUrls: ['./auth2.component.scss']
})
export class Auth2Component {

  isLoginMode = true
  register!:FormGroup
  alertErrorMessage !: string

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.register = this.fb.group({
      'username': new FormControl('', [Validators.required, Validators.maxLength(100),Validators.minLength(6)]),
      'email': new FormControl('', [Validators.required, Validators.maxLength(100),Validators.minLength(6)]),
      'password': new FormControl('', [Validators.required, Validators.maxLength(100),Validators.minLength(6)]),
    });
  }
  onSwicthMode() {
    this.isLoginMode = !this.isLoginMode
  }

  enviar(){

    if(!this.register.valid){
      return;
    }
    const username =  this.register.value.username
    const email = this.register.value.email
    const password = this.register.value.password

    if(this.isLoginMode){

    }else{
      this.authService.signup(email,password).subscribe(resData => {
        console.log(resData)
      },error => {
        console.log(error)
        this.alertErrorMessage = 'Algum erro inesperado aconteceu!'
      }) 
    }

    this.register.reset()

  }
}
