import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page/home-page.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CardModule } from "src/app/shared/card/card.module";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
      HomeRoutingModule,
      CardModule,
    ],
    providers: [],
  })
  export class HomeModule { }