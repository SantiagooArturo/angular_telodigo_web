import { Component , Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { slide1,  slide2, slide3} from '../../../utils/images';
import { Pagination, Navigation, Autoplay} from 'swiper/modules';
import {register} from 'swiper/element/bundle';
import {Swiper} from 'swiper';
register();


@Component({
  selector: 'app-section1dowloand',
  standalone: true,
  imports: [CommonModule],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './section1dowloand.component.html',
  styleUrl: './section1dowloand.component.css'
})
export class Section1dowloandComponent {



  slides = [
    '../../../assets/img/phone_screen_only1.webp',
     '../../../assets/img/phone_screen_only2.webp' ,
     '../../../assets/img/phone_screen_only3.webp' 
  ];


  @Output() close = new EventEmitter<void>();
  
  onClose() {
    this.close.emit();
  }

}



