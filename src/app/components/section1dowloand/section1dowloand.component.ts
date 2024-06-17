import { Component , Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section1dowloand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section1dowloand.component.html',
  styleUrl: './section1dowloand.component.css'
})
export class Section1dowloandComponent {
  @Output() close = new EventEmitter<void>();
  
  onClose() {
    this.close.emit();
  }

}



