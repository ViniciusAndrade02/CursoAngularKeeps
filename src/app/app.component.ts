import { Component,Input } from '@angular/core';
import { RouterService } from './router/router.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  onServerAdded( serverData:{serverName:string,serverContent:string} ){
    this.serverElement.push({
      type: 'serve',
      name: serverData.serverName,
      content:serverData.serverContent
    })
  }
  onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}){
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }




}
