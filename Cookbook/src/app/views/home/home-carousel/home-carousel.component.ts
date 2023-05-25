import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICarouselSlide } from 'src/app/shared/models/carousel-slide';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent {
  
  slides$: Observable<ICarouselSlide[]> = of([
    {title: 'First Slide', subtitle: 'First Slide Short', src: "https://picsum.photos/id/700/900/500"},
    {title: 'Second Slide', subtitle: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
    {title: 'Third Slide', subtitle: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
  ]);
}
