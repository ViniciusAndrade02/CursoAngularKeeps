import { Component } from '@angular/core';
import { RouterService } from '../router.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent {
  nameInput!: string;
  nameDog!: string;
  tipoDog!: string;
  nameProfissao!: string;
  users: any[] = [[
    'nameAnimal',
    'tipoAnimal',
    'nameJob',
  ]];

  constructor(private routerService: RouterService, private router: Router) {
    this.nameInput = this.routerService.inputNome;
    this.nameDog = this.routerService.nameAnimal
    this.tipoDog = this.routerService.tipoDog;
    this.nameProfissao = this.routerService.inputProfissao;
    this.users = this.routerService.usersDescription
    //pegar a array do router.service

  }

  //Outra maneira:

  addUsers() {
    console.log(this.users)
    this.router.navigate(['animal'])
  }
}
