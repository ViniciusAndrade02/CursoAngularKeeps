import { StoreModule } from '@ngrx/store';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http'


import { EmptyComponent } from './empty/empty.component';
import { ServerComponent } from './Server/server/server.component';
import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { InicioCursoComponent } from './inicio-curso/inicio-curso.component';
import { AppRoutingModule } from './app-rounting.module';
import { FormsComponent } from './formulario/forms/forms.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { ObservablesComponent } from './observables/observables.component';
import { ShortenPipe } from './shorten.pipes';
import { HttpBackEndComponent } from './http-back-end/http-back-end.component';
import { ACabecalhoComponent } from './a-cabecalho/a-cabecalho.component';
import { Auth2Component } from './auth2/auth2.component';
import { NgRxComponent } from './ng-rx/ng-rx.component';
import { RxJSComponent } from './rx-js/rx-js.component';

import { AlertComponents } from './shared/alert/alert.component';
import { LearningModule } from './learningModules/learning.module';
import { ProjectAngularModule } from './ProjectAngular/projectangular.module';
import { RouterModules } from './router/router.module';
import { OtherProjectModules } from './OtherProject/otherproject.module';
import { appReducer, itemsReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/app.effect';
import { ROOT_REDUCER } from './store/app.state';
import { StoreDevtools,StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    EmptyComponent,
    ACabecalhoComponent,
    ServerComponent,
    AppComponent,
    OutputComponent,
    ShortenPipe,
    InicioCursoComponent,
    FormsComponent,
    Formulario2Component,
    ObservablesComponent,
    HttpBackEndComponent,
    Auth2Component,
    AlertComponents,
    NgRxComponent,
    RxJSComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    StoreModule.forRoot({app: appReducer,...ROOT_REDUCER}),
    EffectsModule.forRoot([Effects]),
    StoreDevtoolsModule.instrument({name:'TEST'}),
    //Add new Module created for me
    LearningModule,
    ProjectAngularModule,
    RouterModules,
    OtherProjectModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
