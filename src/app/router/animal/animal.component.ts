import { Component } from '@angular/core';
import { RouterService } from '../router.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent {
  inputDog!: string;
  tipoDog!:string

  constructor(private routeService: RouterService,private router:Router) {}

  tipoCao(){
    this.tipoDog='Cachorro'
    this.routeService.receberInputDog(this.inputDog , this.tipoDog)
    this.router.navigate(['./profissao'])
  }

  tipoGato(){
    this.tipoDog='Gato'
    this.routeService.receberInputDog(this.inputDog , this.tipoDog)
    this.router.navigate(['./profissao'])
  }
  
  tipoCavalo(){
    this.tipoDog='Cavalo'
    this.routeService.receberInputDog(this.inputDog , this.tipoDog)
    this.router.navigate(['./profissao'])
  }
}
