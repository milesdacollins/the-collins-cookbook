import { RouterModule, Routes } from "@angular/router";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { NgModule } from "@angular/core";
import { RecipeComponent } from "./recipe/recipe.component";

const routes: Routes = [
    {
      path: '',
      component: RecipeListComponent
    },
    {
        path: ':id',
        component: RecipeComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RecipesRoutingModule { }