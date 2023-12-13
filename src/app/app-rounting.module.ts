import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { EmptyComponent } from "./empty/empty.component";
import { InicioCursoComponent } from "./inicio-curso/inicio-curso.component";
import { RouterComponent } from "./router/router.component";
import { UsuarioComponent } from "./router/usuario/usuario.component";
import { AnimalComponent } from "./router/animal/animal.component";
import { ProfissaoComponent } from "./router/profissao/profissao.component";
import { DinamicoComponent } from "./router/dinamico/dinamico.component";
import { PageNotFoundComponent } from "./router/page-not-found/page-not-found.component";
import { CadastroComponent } from "./router/cadastro/cadastro.component";
import { Auth2Component } from "./auth2/auth2.component";
import { HttpBackEndComponent } from "./http-back-end/http-back-end.component";

//formularios
import { FormsComponent } from "./formulario/forms/forms.component";


const appRoutes: Routes = [
  { path: '', redirectTo:'/menu', pathMatch:'full' }, //inicial.
  { path:'menu', component: EmptyComponent },
  { path: 'fistCourse', component: InicioCursoComponent},
  { path: 'router', component: RouterComponent,children: [
    { path: 'usuario', component: UsuarioComponent },
    { path: 'animal', component: AnimalComponent },
    { path: 'profissao', component: ProfissaoComponent },
    { path: 'dinamico/:id/:name', component: DinamicoComponent},
  ]},
  { path: 'FormsComponent', component: FormsComponent},
  { path: 'cadastro', component: CadastroComponent },
  { path: 'apiRest', component: HttpBackEndComponent},
  { path: 'auth', component: Auth2Component},
  { path: 'not-found', component: PageNotFoundComponent },
  { path:'**', redirectTo:'/not-found' } //pegar todos os caminhos que não achar
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{

}