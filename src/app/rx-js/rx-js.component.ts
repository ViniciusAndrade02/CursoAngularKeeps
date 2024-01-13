import { Component,OnInit } from '@angular/core';
import { of,map } from 'rxjs';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss']
})
export class RxJSComponent implements OnInit{

  ngOnInit(): void {
    const numero = of(1,2,3,4,5)
  }
}
