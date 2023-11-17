import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  inputNome!: string;
  tipoDog!: string;
  nameAnimal!:string
  inputProfissao!: string;

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
    this.usersDescription.push({
      nameAnimal: this.nameAnimal,
      nameJob: this.inputProfissao,
      tipoAnimal:this.tipoDog,
    });
  }
}
