import { Component,Input,OnInit } from '@angular/core';
import { RouterService } from './router/router.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    // this.router.navigate([''])
  }

  //Projeto Seção 5
  serverElement = [{
    type:'server',
    name:'teste',
    content:"Just a test!"
  }]

  mensagemDoPai: { nome: string; idade: number }[] = [
    {
      nome: 'Leticia',
      idade: 10
    },
    {
      nome:'viicius',
      idade:11
    }
  ];

  mensagemRecebida: string = '';

  recebendoMensagem(mensagem: string) {
    this.mensagemRecebida = mensagem;
  }




  
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
