import { Component } from '@angular/core';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  nameInput!:string

  constructor(private routerService:RouterService){
    this.nameInput = this.routerService.inputNome
  }

}
