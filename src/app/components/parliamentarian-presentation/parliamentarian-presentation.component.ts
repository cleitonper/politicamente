import { Component, Input } from '@angular/core';

import { Parliamentarian } from '../../shared/model/parliamentarian.model';

@Component({
  selector: 'app-parliamentarian-presentation',
  templateUrl: './parliamentarian-presentation.component.html',
  styleUrls: ['./parliamentarian-presentation.component.scss']
})
export class ParliamentarianPresentationComponent {
  @Input()
  parliamentarian: Parliamentarian;
}
