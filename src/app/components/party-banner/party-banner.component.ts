import { Component, Input, Output, EventEmitter } from '@angular/core';

import { getAverageColor, getBrightness } from '../../shared/util';

@Component({
  selector: 'app-party-banner',
  templateUrl: './party-banner.component.html',
  styleUrls: ['./party-banner.component.scss']
})
export class PartyBannerComponent {
  @Input()
  public initials: string;
  @Output()
  bannerLoaded = new EventEmitter();
  public portrait = '1023px';
  public landscape = '1024px';

  public imageLoad(image: HTMLImageElement) {
    const color = getAverageColor(image);
    const brightness = getBrightness(color);
    this.bannerLoaded.emit({ brightness: brightness });
  }
}
