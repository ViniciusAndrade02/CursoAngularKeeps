import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { EmptyComponent } from "./empty/empty.component";
import { InicioCursoComponent } from "./inicio-curso/inicio-curso.component";
import { CadastroComponent } from "./router/cadastro/cadastro.component";
import { Auth2Component } from "./auth2/auth2.component";
import { HttpBackEndComponent } from "./http-back-end/http-back-end.component";
import { NgRxComponent } from "./ng-rx/ng-rx.component";

//formularios
import { FormsComponent } from "./formulario/forms/forms.component";


const appRoutes: Routes = [
  { path: '', redirectTo:'/menu', pathMatch:'full' }, //inicial.
  { path:'menu', component: EmptyComponent },
  { path: 'fistCourse', component: InicioCursoComponent},
  { path: 'FormsComponent', component: FormsComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'apiRest', component: HttpBackEndComponent},
  { path: 'auth', component: Auth2Component},
  { path: 'ngrx', component: NgRxComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule{

}