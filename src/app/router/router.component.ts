import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from './router.service';
@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss'],
})
export class RouterComponent {
  btn: boolean = true;
  showRouter: boolean = false;
  hideName: boolean = true;
  inputName!: string;

  constructor(private router: Router, private routerService: RouterService) {}

  avancar() {
    this.router.navigate(['usuario']);
    this.btn = false;
    this.showRouter = true;
    this.hideName = false;

    this.routerService.receberInputName(this.inputName);
  }
}
