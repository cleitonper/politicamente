import {
  Component,
  OnInit,
  HostBinding,
  HostListener
} from '@angular/core';

import { SearchbarController } from './searchbar.controller';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @HostBinding('class.opened')
  private isOpen: boolean;

  constructor(
    private searchbarController: SearchbarController
  ) { }

  ngOnInit() {
    this.searchbarController
      .getState()
      .subscribe(state => this.isOpen = state.isOpen);
  }

  @HostListener('document:keydown', ['$event'])
  private onKeyDown(event: KeyboardEvent) {
    const code = event.charCode || event.keyCode;

    if (code === 27 && this.isOpen) {
      this.searchbarController.close();
    }
  }

  public close() {
    this.searchbarController.close();
  }
}

// TODO: Implement a fauture to search resources
