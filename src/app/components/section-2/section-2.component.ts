import { Component } from '@angular/core';
import {mesage, phone_screen_only4, phone_screen_only4_mobile} from '../../../utils/images'

 
@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.css'
})
export class Section2Component {
  mesage = mesage;
  phone_screen_only4 = phone_screen_only4; 
  phone_screen_only4_mobile = phone_screen_only4_mobile;
}
