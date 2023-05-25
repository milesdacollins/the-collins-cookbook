import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page/home-page.component";
import { HomeRoutingModule } from "./home-routing.module";
import { CardModule } from "src/app/shared/card/card.module";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HomePageComponent,
        HomeCarouselComponent
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      CardModule,
      NgbCarouselModule
    ],
    providers: [],
  })
  export class HomeModule { }