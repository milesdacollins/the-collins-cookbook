import { CommonModule } from "@angular/common";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { NgModule } from "@angular/core";
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations: [
       RecipeListComponent,
       RecipeComponent 
    ],
    imports: [
      CommonModule,
      RecipesRoutingModule
    ],
    providers: [],
  })
  export class RecipesModule { }