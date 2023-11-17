import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  inputNome!: string;
  inputDog!: string;
  tipoDog!: string;
  inputProfissao!: string;

  receberInputName(nomeInput: any) {
    this.inputNome = nomeInput;
    console.log(this.inputNome);
  }

  receberInputDog(nomeDog: any,tipoDog:any) {
    this.inputDog = nomeDog;
    this.tipoDog= tipoDog
    console.log(this.inputDog,this.tipoDog)
  }

  receberInputProfissao(nomeProfissao:any){
    this.inputProfissao=nomeProfissao
  }
}
