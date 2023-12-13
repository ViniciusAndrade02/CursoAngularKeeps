import { NgModule } from "@angular/core";

import { HeaderComponent } from "./Header/header.component";
import { RecipeDetailComponent } from "./Recipes/Recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./Recipes/Recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./Recipes/Recipe-list/recipe-list/recipe-list.component";
import { RecipesComponents } from "./Recipes/Recipe-list/recipes.components";
import { ShoppingEditComponents } from "./Shopping-list/shopping-edit/shopping-edit.components";
import { ShoppingListComponents } from "./Shopping-list/shopping-list.component";
import { ShareImports } from "../shared/shared.module";

@NgModule({

  declarations:[
    HeaderComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponents,
    ShoppingListComponents,
    ShoppingEditComponents
  ],
  imports:[
    ShareImports
  ],
  exports:[
    HeaderComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponents,
    ShoppingListComponents,
    ShoppingEditComponents
  ]
})

export class ProjectAngularModule{

}