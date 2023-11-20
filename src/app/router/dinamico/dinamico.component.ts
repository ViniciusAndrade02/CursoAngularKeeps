import { Component, Inject, OnInit,DoCheck} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit,DoCheck{

  dinamico!: {id:number, name:string}

  constructor(private route:ActivatedRoute , private router:Router){}

  ngOnInit(){
    this.dinamico ={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }
    this.route.params.subscribe((params:Params)=> {
      this.dinamico.id = params['id']
      this.dinamico.name= params['name']
    })

  }

  ngDoCheck(): void {
    console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
  }

  onLoadDinamico(){
    this.router.navigate(['/dinamico',this.dinamico.id,this.dinamico.name], {queryParams: {allowEdit:20},fragment:'LEITE'})
  }
}
