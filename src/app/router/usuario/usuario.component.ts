import { Component } from '@angular/core';
import { RouterService } from '../router.service';
import {Router} from '@angular/router'
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
  users:string[] = ['a']


  constructor(private routerService:RouterService ,private router:Router){
    this.nameInput = this.routerService.inputNome
    this.nameDog=this.routerService.inputDog[0]
    this.tipoDog=this.routerService.tipoDog
    this.nameProfissao= this.routerService.inputProfissao
  }

  addUsers(){
    this.users.push('a')
    
    //this.router.navigate(['animal'])
  }

}
