import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('parentAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2.6s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('2.6s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {




  
  title = 'lp-telodigo';
  
  showChild = false;

  onParentAnimationDone(event: any) {
    this.showChild = true;
  }

  showSection2 = false;

  onShowSection2() {
    this.showSection2 = true;
  }

  onCloseSection2() {
    this.showSection2 = false;
  }
}
