
import { Component, AfterViewInit   , Output, ElementRef,EventEmitter, ViewChild, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { mobile_stores, phone_screen_hero } from '../../../utils/images';
import { trigger, transition, style, animate } from '@angular/animations';



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
  styleUrls: ['./section-1.component.css']
})
export class Section1Component implements AfterViewInit {


  @Output() showSection2 = new EventEmitter<void>();

  mobile_stores = mobile_stores;
  phone_screen_hero = phone_screen_hero;
  estadoDeAnimacion: string = 'hidden';
  showElement = false;

  @ViewChild('componentElement') componentElement: ElementRef | undefined;

  constructor(private elementRef: ElementRef) {}

 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility(); // Llama a checkVisibility() cada vez que se hace scroll
  }


  
  checkVisibility() {
    if (this.componentElement && this.componentElement.nativeElement instanceof HTMLElement) {
      const element = this.componentElement.nativeElement;
      const bounds = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const threshold = viewportHeight * 0.5; 

      
      if (bounds.top < viewportHeight - threshold && bounds.bottom >= threshold) {
        this.showElement = true;
      } else {
        if (bounds.bottom < 0 || bounds.top > viewportHeight) {
          this.showElement = false;
        } else {
          this.showElement = false;
        }
      }
    } else {
      console.warn('componentElement.nativeElement no es un HTMLElement válido');
    }
  
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.showElement = true;
    }, 0);
  }

  onDownloadClick() {
    this.showSection2.emit();
  }
}
