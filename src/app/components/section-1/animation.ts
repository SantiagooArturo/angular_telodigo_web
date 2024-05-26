import { trigger,state, style, animate, transition } from '@angular/animations';


export const fadeIn = 
trigger('fadeInHero', [
   transition(':enter', [
     
    style({ opacity: 0, transform: 'translateY(-250px) rotate(85deg)' }),
     
     animate('1.1s cubic-bezier(0.05, 0.15, 0.35, 0.75)', 
     
     style({ opacity: 1, transform: 'translateY(0) rotate(0)' }))
   ])
 ])



//  hidden: {
//     opacity: 0,
//     translateX: 200,
//     translateY: -250,
//     rotate: 85
//   },
//   show: {
//     opacity: 1,
//     translateX: 0,
//     translateY: 0,
//     rotate: 0,
//     transition: {
//       duration: 1.10,
//       delay: 1,
//       ease: [0.05, 0.15, 0.35, 0.75]
//     }
//   }
