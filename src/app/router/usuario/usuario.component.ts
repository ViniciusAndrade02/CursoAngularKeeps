import { Component } from '@angular/core';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  nameInput!:string
  nameDog!:string
  tipoDog!:string
  nameProfissao!:string

  constructor(private routerService:RouterService){
    this.nameInput = this.routerService.inputNome
    this.nameDog=this.routerService.inputDog
    this.tipoDog=this.routerService.tipoDog
    this.nameProfissao= this.routerService.inputProfissao
  }

}
