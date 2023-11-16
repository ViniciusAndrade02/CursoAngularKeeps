import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',
})

export class RouterService {

  inputNome!:string
  inputDog!:string
  tipoDog!:string
  inputProfissao!:string


  Receber(sla:any){
    this.inputNome = sla
    console.log(this.inputNome)
  }
}