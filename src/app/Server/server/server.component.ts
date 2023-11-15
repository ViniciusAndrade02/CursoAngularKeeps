import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-server', 
  templateUrl: './server.component.html',
  styleUrls:['./server.component.scss']
})
export class ServerComponent implements OnInit {
  word!:string
  array:Number[] = [10,20,30,40,50,60,70,80,90,100]
  numero!:Number
  alterar:number = 0
  text:string = 'eejhej'
  server!:string
  idiota:boolean= false;
  aleatorio!:number ;


  mudar(){
    let aleatorio = Math.floor(Math.random() * 9) + 1
    this.numero = this.array[aleatorio]
  }
  
  ngOnInit(): void {
    console.log(this.numero)
  }



  espera:boolean = false

  constructor(){
    //contagem de 2 segundos
    setTimeout(() => {
      this.espera = true
    }, 2000);
    this.aleatorio = Math.floor(Math.random() * 9) + 1;
  }

  

  servername(event:Event){
      this.server = (<HTMLInputElement>event.target).value
  }

  aparecer(){
    this.idiota = !this.idiota
  }

  getColor(){
    return this.aleatorio >=5 ? 'green' : 'red' 
  }

  colorDivAoLado(){
    return this.aleatorio >= 5 ? 'ativa' : 'desativa'
  }

}
