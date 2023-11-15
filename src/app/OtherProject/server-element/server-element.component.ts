import { Component,Input,Output,EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent {
  variavel!:any
  receber(getText:string){
    this.variavel=getText
    console.log(getText)
  }
}
