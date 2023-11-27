import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  @ViewChild('f') signupForm!:NgForm;
  defaultQuestion:string = 'bolacha';
  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',

  }
  //onSumit(form:NgForm){
    //console.log(form)
  //}
  suggestUserName(){
    const suggestName = 'LEITE'

    this.signupForm.form.patchValue({
      userData: {
        username:'vinicius',
      }
    })
  }

  onSumit(){
    console.log(this.signupForm)
    this.user.username= this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email //esse email é o name do input
    this.user.secretQuestion = this.signupForm.value.secret
    this.user.answer = this.signupForm.value.asnwer

    this.signupForm.reset() // resetar os valores do formulário
  }


}
