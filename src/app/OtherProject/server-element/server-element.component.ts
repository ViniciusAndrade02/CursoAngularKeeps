import {
  Component,
  Input,
  Output,
  EventEmitter,
  Inject,
  Injectable,
  OnInit,
} from '@angular/core';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  
})
export class ServerElementComponent implements OnInit {
  
  variavel!: any;


  constructor(private mandarService: LoggingService) {
    this.variavel = this.mandarService.status;
  }

  ngOnInit() {}
}
