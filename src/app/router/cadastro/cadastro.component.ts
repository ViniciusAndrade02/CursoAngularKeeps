import { Component } from '@angular/core';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  constructor(private routerService:RouterService){}

  onActive(){
    this.routerService.activaredEmitter.emit(true)
  }
}
