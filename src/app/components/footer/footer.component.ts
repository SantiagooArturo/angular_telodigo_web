import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { visa,  mastercard, amex, diners, paypal} from '../../../utils/images';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  images : string[] = [
    visa,
    mastercard, 
    amex, 
    diners,
    paypal
  ]

  link_social: {link: string, text: string}[] = [
    {text: 'Instagram', link: 'https://www.instagram.com/telodigo.pe'},
    {text: 'Facebook', link: ''},
    {text: 'X', link: ''},
    {text: 'Tiktok', link: ''}
  ]
}

