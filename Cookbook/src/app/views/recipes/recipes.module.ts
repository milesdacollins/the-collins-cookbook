import { CommonModule } from "@angular/common";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { NgModule } from "@angular/core";
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';

@NgModule({
    declarations: [
       RecipeListComponent,
       RecipeComponent,
       RecipeCreateComponent 
    ],
    imports: [
      CommonModule,
      RecipesRoutingModule
    ],
    providers: [],
  })
  export class RecipesModule { }