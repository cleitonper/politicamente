import {
  query,
  style,
  trigger,
  stagger,
  animate,
  transition,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(-15px)' }),
      stagger('200ms', animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
    ], { optional: true })
  ])
]);
