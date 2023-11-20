import { Component } from '@angular/core';
import { RouterService } from '../router/router.service';
RouterService

@Component({
  selector: 'app-inicio-curso',
  templateUrl: './inicio-curso.component.html',
  styleUrls: ['./inicio-curso.component.scss']
})
export class InicioCursoComponent {
  title = 'CursoAngular';
  name!:string
  servers:string[] = ['TestServer']
  serverName:string = 'TestServer'
  serverElements!:string[]

  constructor(private recebidoBtn:RouterService){
  }


  GerarServer(){
    this.servers.push(this.serverName)

  }

  //Projeto Seção 5

  serverElement = [{
    type:'server',
    name:'teste',
    content:"Just a test!"
  }]
}
