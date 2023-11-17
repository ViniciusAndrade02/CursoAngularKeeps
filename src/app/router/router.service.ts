import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  inputNome!: string;
  inputDogaRRAY: any[] = [];
  tipoDog!: string;
  inputProfissao!: string;

  usersDescription = [
    {
      nameAnimal: 'Cleiton',
      tipoAnimal:'gato',
      nameJob: 'estagiario',
    },
  ];

  receberInputDog(nomeDog: any, tipoDog: any) {
    this.inputDogaRRAY.push(nomeDog);
    this.tipoDog = tipoDog;
  }

  receberInputName(nomeInput: any) {
    this.inputNome = nomeInput;

  }

  receberInputProfissao(nomeProfissao: any) {
    this.inputProfissao = nomeProfissao;
    this.usersDescription.push({
      nameAnimal: this.tipoDog,
      nameJob: this.inputProfissao,
      tipoAnimal:this.tipoDog,
    });
    console.log(this.usersDescription);
  }
}
