import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  getText!:string;
  corpadrao:string = 'pink'
  @Output() enviar = new EventEmitter<string>();

  mandar(getText:string){

    this.enviar.emit(this.getText)
  }

  arrays:(string | number)[][] = [['leite','quente',1,3,5]]

  numero:number = 5
  duplicar(){
    this.numero = this.numero+2
    const newArray = ['leite','quente',1,3,this.numero]
    this.arrays.push(newArray);
  }
}
