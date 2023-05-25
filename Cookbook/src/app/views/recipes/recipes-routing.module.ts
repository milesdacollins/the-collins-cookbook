import { RouterModule, Routes } from "@angular/router";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Component, NgModule } from "@angular/core";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeCreateComponent } from "./recipe-create/recipe-create.component";

const routes: Routes = [
    {
      path: '',
      component: RecipeListComponent
    },
    {
      path: 'new',
      component: RecipeCreateComponent
    },
    {
        path: ':id',
        component: RecipeComponent
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RecipesRoutingModule { }