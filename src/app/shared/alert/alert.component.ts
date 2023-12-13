import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector:'alert-error',
  templateUrl:'./alert.component.html',
  styleUrls:['./alert.component.scss']
})

export class AlertComponents{

  @Input() message!:string
}