import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input()
  public icon: string;
  @Input()
  public label: string;
  @Input()
  public disabled = false;
}
