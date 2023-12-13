import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http'


import { EmptyComponent } from './empty/empty.component';
import { ServerComponent } from './Server/server/server.component';
import { AppComponent } from './app.component';
import { CockpitComponent } from './OtherProject/cockpit/cockpit.component';
import { ServerElementComponent } from './OtherProject/server-element/server-element.component';
import { OutputComponent } from './output/output.component';
import { TestComponent } from './OtherProject/test/test.component';
import { BasicHighLightDirective } from './OtherProject/basic-highlight/basic-hightlight.directive';
import { BetterHighLightDirective } from './OtherProject/better-hignLight/better-highLight.directive';
import { DirectiveConstructor } from './OtherProject/bi-diretris-estrutural/diretris-estrutural';
import { InicioCursoComponent } from './inicio-curso/inicio-curso.component';
import { AppRoutingModule } from './app-rounting.module';
import { FormsComponent } from './formulario/forms/forms.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { ObservablesComponent } from './observables/observables.component';
import { ShortenPipe } from './shorten.pipes';
import { HttpBackEndComponent } from './http-back-end/http-back-end.component';
import { ACabecalhoComponent } from './a-cabecalho/a-cabecalho.component';
import { Auth2Component } from './auth2/auth2.component';
import { AlertComponents } from './shared/alert/alert.component';
import { LearningModule } from './learningModules/learning.module';
import { ProjectAngularModule } from './ProjectAngular/projectangular.module';
import { RouterModules } from './router/router.module';
@NgModule({
  declarations: [
    EmptyComponent,
    ACabecalhoComponent,
    ServerComponent,
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    OutputComponent,
    TestComponent,
    BasicHighLightDirective, //é um directive,
    BetterHighLightDirective, //é uma directive
    DirectiveConstructor,
    ShortenPipe,
    InicioCursoComponent,
    FormsComponent,
    Formulario2Component,
    ObservablesComponent,
    HttpBackEndComponent,
    Auth2Component,
    AlertComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    //Add new Module created for me
    LearningModule,
    ProjectAngularModule,
    RouterModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
