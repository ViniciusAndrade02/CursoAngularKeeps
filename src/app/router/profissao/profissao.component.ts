import { Component } from '@angular/core';
import { RouterService } from '../router.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profissao',
  templateUrl: './profissao.component.html',
  styleUrls: ['./profissao.component.scss']
})
export class ProfissaoComponent {

  inputProfissao:string = ""
  errorProfissao:boolean = false

  constructor(private routerComponente:RouterService,private router:Router){
  }

  enviarProfissao(){

    if(this.inputProfissao == ""){
      this.errorProfissao = true
    }else{
      this.routerComponente.receberInputProfissao(this.inputProfissao)
      this.router.navigate(['./usuario'])
    }
  }
}
