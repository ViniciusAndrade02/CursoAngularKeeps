import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators'; // Adicionei o operador map aqui

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  numerosFiltrados: number[] = [];

  ngOnInit() {
    const numerosEscolhidos = from([1, 2, 3, 4, 5, 8, 12, 14]);
    const numerosFiltradosObservable = numerosEscolhidos.pipe(
      filter(numero => numero % 2 === 0)
    );
    numerosFiltradosObservable.subscribe(resultado => {
      this.numerosFiltrados.push(resultado);
      console.log(resultado);
    });

    const numerosObservable = from([1, 2, 3, 4, 5]);
    const numerosTransformadosObservable = numerosObservable.pipe(
      map(numero => numero * 2)
    );
    numerosTransformadosObservable.subscribe(resultado => console.log(resultado));
  }
}
