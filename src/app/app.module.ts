import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { ServerComponent } from './Server/server/server.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ProjectAngular/Header/header.component';
import { RecipeDetailComponent } from './ProjectAngular/Recipes/Recipe-detail/recipe-detail.component';
import { RecipesComponents } from './ProjectAngular/Recipes/Recipe-list/recipes.components';
import { RecipeItemComponent } from './ProjectAngular/Recipes/Recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponents } from './ProjectAngular/Shopping-list/shopping-list.component';
import { ShoppingEditComponents } from './ProjectAngular/Shopping-list/shopping-edit/shopping-edit.components';
import { RecipeListComponent } from './ProjectAngular/Recipes/Recipe-list/recipe-list/recipe-list.component';
import { CockpitComponent } from './OtherProject/cockpit/cockpit.component';
import { ServerElementComponent } from './OtherProject/server-element/server-element.component';
import { OutputComponent } from './output/output.component';
import { TestComponent } from './OtherProject/test/test.component';
import { BasicHighLightDirective } from './OtherProject/basic-highlight/basic-hightlight.directive';
import { BetterHighLightDirective } from './OtherProject/better-hignLight/better-highLight.directive';
import { DirectiveConstructor } from './OtherProject/bi-diretris-estrutural/diretris-estrutural';
import { RouterComponent } from './router/router.component';
import { UsuarioComponent } from './router/usuario/usuario.component';
import { ProfissaoComponent } from './router/profissao/profissao.component';
import { AnimalComponent } from './router/animal/animal.component';
import { DinamicoComponent } from './router/dinamico/dinamico.component';
import { PageNotFoundComponent } from './router/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', component: RouterComponent }, //inicial
  { path: 'usuario', component: UsuarioComponent },
  { path: 'animal', component: AnimalComponent },
  { path: 'profissao', component: ProfissaoComponent },
  { path: 'dinamico/:id/:name', component: DinamicoComponent},
  { path: 'not-found', component: PageNotFoundComponent },
  { path:'**', redirectTo:'/not-found' } //pegar todos os caminhos que não achar
];



@NgModule({
  declarations: [
    ServerComponent,
    AppComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipesComponents,
    ShoppingListComponents,
    ShoppingEditComponents,
    RecipeItemComponent,
    RecipeListComponent,
    CockpitComponent,
    ServerElementComponent,
    OutputComponent,
    TestComponent,
    BasicHighLightDirective, //é um directive,
    BetterHighLightDirective, //é uma directive
    DirectiveConstructor, RouterComponent, UsuarioComponent, ProfissaoComponent, AnimalComponent, DinamicoComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
