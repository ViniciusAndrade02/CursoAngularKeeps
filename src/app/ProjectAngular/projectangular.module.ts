import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from "./Header/header.component";
import { RecipeDetailComponent } from "./Recipes/Recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./Recipes/Recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./Recipes/Recipe-list/recipe-list/recipe-list.component";
import { RecipesComponents } from "./Recipes/Recipe-list/recipes.components";
import { ShoppingEditComponents } from "./Shopping-list/shopping-edit/shopping-edit.components";
import { ShoppingListComponents } from "./Shopping-list/shopping-list.component";

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
    CommonModule,
    FormsModule
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