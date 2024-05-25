import { Component } from '@angular/core';
import { mobile_stores,  phone_screen_hero } from '../../../utils/images';
import { trigger, state, style, animate, transition } from '@angular/animations';
/**
 * import { mobile_stores, phone_screen_hero } from '../../utils/images'
import { fadeInHero } from '../../animations/Animations'
 */
 
@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('fadeInHero', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-250px) rotate(85deg)' }),
        animate('1.1s cubic-bezier(0.05, 0.15, 0.35, 0.75)', style({ opacity: 1, transform: 'translateY(0) rotate(0)' }))
      ])
    ])
  ],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.css'
})
export class Section1Component {
  mobile_stores = mobile_stores;
  phone_screen_hero = phone_screen_hero;

  public state = 'hidden';

  ngAfterViewInit() {
    this.state = 'show';
  }

}
