import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit{
  nameInput!: string;
  getBolleanCadastro:boolean = false
  users: any[] = [[
    'nameAnimal',
    'tipoAnimal',
    'nameJob',
  ]];

  constructor(private routerService: RouterService, private router: Router) {

    this.nameInput = this.routerService.inputNome
    //pegar a array do router.service
    this.users = this.routerService.usersDescription
  }

  ngOnInit(): void {
    this.routerService.activaredEmitter.subscribe(didActivate => {
      this.getBolleanCadastro = didActivate
    })
  }


  addUsers() {
    console.log(this.users)
    this.router.navigate(['animal'])
  }
}
