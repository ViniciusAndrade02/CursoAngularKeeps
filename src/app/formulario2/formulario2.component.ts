import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.scss']
})
export class Formulario2Component implements OnInit{

  @Input() mensagem: { nome: string; idade: number }[] = [];
  @Output() enviando:EventEmitter<string> = new EventEmitter<string>();

  envianoOutput:string = 'OLÁ,mensagem vinda no formulario 2'

  genders: string[] = ['male','female']
  forbiddenUsername:string[] = ['Chris','Anna']

  signupForm!:FormGroup

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('',[Validators.required,Validators.maxLength(10)]),
        'email': new FormControl('',[Validators.required,Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])

    })
  } 

  onAddHooby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onSubmit(){
    console.log(this.signupForm)
    this.enviando.emit(this.envianoOutput)
  }
}
