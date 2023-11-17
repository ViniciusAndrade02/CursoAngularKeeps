import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  inputNome!: string;
  inputDog: any[] = []
  tipoDog!: string;
  inputProfissao!: string;

  receberInputDog(nomeDog: any,tipoDog:any) {
    this.inputDog.push(nomeDog);
    this.tipoDog= tipoDog
    console.log(this.inputDog,this.tipoDog)
  }

  receberInputName(nomeInput: any) {
    this.inputNome = nomeInput;
    console.log(this.inputNome);
  }


  receberInputProfissao(nomeProfissao:any){
    this.inputProfissao=nomeProfissao
  }
}
