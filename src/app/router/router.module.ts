import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterComponent } from './router.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProfissaoComponent } from './profissao/profissao.component';
import { AnimalComponent } from './animal/animal.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ShareImports } from '../shared/shared.module';

@NgModule({
  declarations: [
    RouterComponent,
    UsuarioComponent,
    ProfissaoComponent,
    AnimalComponent,
    DinamicoComponent,
    CadastroComponent,
  ],
  imports: [
    ShareImports,
    RouterModule.forChild([
      {
        path: 'router',
        component: RouterComponent,
        children: [
          { path: 'usuario', component: UsuarioComponent },
          { path: 'animal', component: AnimalComponent },
          { path: 'profissao', component: ProfissaoComponent },
          { path: 'dinamico/:id/:name', component: DinamicoComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class RouterModules {}
