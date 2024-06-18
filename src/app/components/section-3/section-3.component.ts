import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.css',
  animations: [
    trigger('parentAnimation', [ 
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('1.0s', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('0.0s', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('parentAnimation2', [ 
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('1.0s', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('0.0s', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ] 
})
export class Section3Component implements AfterViewInit{
  showChild = false;
  onParentAnimationDone(event: any) {
    this.showChild = true;
  }
  onParentAnimationDone2(event: any) {
    this.showChild = true;
  }



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


}
