import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  inputNome!: string;

  //gpegar o que foi digitado
  tipoDog!: string;
  nameAnimal!:string
  inputProfissao!: string;


  //array PAI
  usersDescription:any = [
  ];

  receberInputDog(nomeDog: any, tipoDog: any) {
    this.tipoDog = tipoDog;
    this.nameAnimal = nomeDog
  }

  receberInputName(nomeInput: any) {
    this.inputNome = nomeInput;

  }

  receberInputProfissao(nomeProfissao: any) {
    this.inputProfissao = nomeProfissao;

    //envir tudo para a array 
    this.usersDescription.push({
      nameAnimal: this.nameAnimal,
      nameJob: this.inputProfissao,
      tipoAnimal:this.tipoDog,
    });
  }

  activaredEmitter = new EventEmitter<boolean>()
}
