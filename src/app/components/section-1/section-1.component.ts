import { Component, AfterViewInit   , Output} from '@angular/core';
import { mobile_stores,  phone_screen_hero } from '../../../utils/images';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

 
@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('childAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(200px) translateY(-250px) rotate(85deg)' }),
        animate('1.2s 1s cubic-bezier(0.05, 0.15, 0.35, 0.75)', style({ opacity: 1, transform: 'translateX(0) translateY(0) rotate(0)' }))
      ])
    ])
  ],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.css'
})
export class Section1Component implements AfterViewInit{

  mobile_stores = mobile_stores;
  phone_screen_hero = phone_screen_hero;
  estadoDeAnimacion:string = 'hidden'; 

  showElement = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.showElement = true;
    }, 0); // 2000 milisegundos = 2 segundos
  }
 
}
