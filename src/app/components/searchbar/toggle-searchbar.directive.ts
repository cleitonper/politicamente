import { Directive, HostListener } from '@angular/core';

import { SearchbarController }     from './searchbar.controller';

@Directive({
  selector: '[appToggleSearchbar]'
})
export class ToggleSearchbarDirective {
  constructor(
    private searchbar: SearchbarController
  ) { }

  @HostListener('click', ['$event'])
  private onClick() {
    this.searchbar.toggle();
  }
}
