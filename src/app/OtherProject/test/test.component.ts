import {
  Component,
  Input,
  Output,
  EventEmitter,
  Injectable,
  OnInit,
} from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  
})
export class TestComponent implements OnInit {
  getText!: string;
  corpadrao: string = 'pink';
  @Output() enviar = new EventEmitter<string>();

  mandar(getText: string) {
    this.enviar.emit(this.getText);
  }

  constructor(
    private mandarService: LoggingService,
  ) {}

  ngOnInit(): void {}

  numero: number = 5;
  arrays: (string | number)[] = [this.numero];

  duplicar() {
    this.numero = this.numero + 2;
    this.arrays.push(this.numero);
    this.mandarService.statusChanges(this.numero);
  }
}
