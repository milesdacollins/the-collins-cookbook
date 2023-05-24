import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        LayoutComponent,
        NavBarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        LayoutComponent
    ]
  })
  export class LayoutModule { }