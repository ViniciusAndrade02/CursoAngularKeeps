import { NgModule } from "@angular/core";

import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { TestComponent } from "./test/test.component";
import { BasicHighLightDirective } from "./basic-highlight/basic-hightlight.directive";
import { BetterHighLightDirective } from "./better-hignLight/better-highLight.directive";
import { DirectiveConstructor } from "./bi-diretris-estrutural/diretris-estrutural";
import { ShareImports } from "../shared/shared.module";

@NgModule({
  declarations:[
    CockpitComponent,
    ServerElementComponent,
    TestComponent,
    BasicHighLightDirective, //é um directive,
    BetterHighLightDirective, //é uma directive
    DirectiveConstructor
  ],
  imports:[
    ShareImports
  ]
})

export class OtherProjectModules{ }