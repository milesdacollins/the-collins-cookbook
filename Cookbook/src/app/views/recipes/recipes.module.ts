import { CommonModule } from "@angular/common";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
       RecipeListComponent 
    ],
    imports: [
      CommonModule
    ],
    providers: [],
  })
  export class RecipesModule { }