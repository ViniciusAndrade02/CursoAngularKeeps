import { Component,OnInit,OnDestroy } from '@angular/core';
import { RouterService } from '../router.service';
import {Router} from '@angular/router';
import { count, interval,Subscription } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-profissao',
  templateUrl: './profissao.component.html',
  styleUrls: ['./profissao.component.scss']
})
export class ProfissaoComponent implements OnInit,OnDestroy{

  inputProfissao:string = ""
  errorProfissao:boolean = false
 


  constructor(private routerComponente:RouterService,private router:Router){
  }

  enviarProfissao(){

    if(this.inputProfissao == ""){
      this.errorProfissao = true
    }else{
      this.routerComponente.receberInputProfissao(this.inputProfissao)
      this.router.navigate(['router/usuario'])
    }
  }

  private firstObsSubscription!: Subscription;

  ngOnInit(): void {
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
      if(count == 3){
        console.log('PAROU')
        this.firstObsSubscription.unsubscribe()
        
      }
    });


  }


  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
