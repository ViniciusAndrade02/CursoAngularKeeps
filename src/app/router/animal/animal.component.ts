import { Component } from '@angular/core';
import { RouterService } from '../router.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent {
  inputNameDog: string = ""
  tipoDog!:string
  errorAnimal:boolean = false

  constructor(private routeService: RouterService,private router:Router) {}

  tipoCao(){

    if(this.inputNameDog == ""){
      this.errorAnimal=true
    }else{
      this.tipoDog='Cachorro'
      this.routeService.receberInputDog(this.inputNameDog , this.tipoDog)
      this.router.navigate(['profissao'])
    }

  }

  tipoGato(){
    if(this.inputNameDog == ""){
      this.errorAnimal=true
    }else{
      this.tipoDog='Gato'
      this.routeService.receberInputDog(this.inputNameDog , this.tipoDog)
      this.router.navigate(['profissao'])
    }
  }
  
  tipoCavalo(){
    if(this.inputNameDog == ""){
      this.errorAnimal=true
    }else{
      this.tipoDog='Cavalo'
      this.routeService.receberInputDog(this.inputNameDog , this.tipoDog)
      this.router.navigate(['profissao'])
    }
  }
}
