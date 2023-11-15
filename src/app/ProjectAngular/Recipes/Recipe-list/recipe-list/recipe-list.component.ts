import { Component } from "@angular/core";
import { Recipe } from "../recipes.model";

@Component({
  selector:'app-recipe-list',
  templateUrl:'recipe-list.component.html'
})

export class RecipeListComponent{
  recipes: Recipe[] = [
    new Recipe('aaa','bbb','https://www.fsp.usp.br/sustentarea/wp-content/uploads/2021/10/Receitas-Capa-1.png'),
    
  ]
}