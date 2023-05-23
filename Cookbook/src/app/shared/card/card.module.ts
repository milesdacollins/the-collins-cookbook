import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { CardBodyComponent } from "./card-body/card-body.component";
import { CardHeaderComponent } from './card-header/card-header.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        CardComponent,
        CardBodyComponent,
        CardHeaderComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardComponent,
        CardBodyComponent,
        CardHeaderComponent,
    ]
  })
  export class CardModule { }