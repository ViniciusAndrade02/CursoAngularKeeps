import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { EmptyComponent } from "./empty/empty.component";
import { RouterComponent } from "./router/router.component";
import { UsuarioComponent } from "./router/usuario/usuario.component";
import { AnimalComponent } from "./router/animal/animal.component";
import { ProfissaoComponent } from "./router/profissao/profissao.component";
import { DinamicoComponent } from "./router/dinamico/dinamico.component";
import { PageNotFoundComponent } from "./router/page-not-found/page-not-found.component";
import { CadastroComponent } from "./router/cadastro/cadastro.component";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  { path: '', component: EmptyComponent }, //inicial
  { path: 'usuario', component: UsuarioComponent },
  { path: 'animal', component: AnimalComponent },
  { path: 'profissao', component: ProfissaoComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dinamico/:id/:name', component: DinamicoComponent},
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