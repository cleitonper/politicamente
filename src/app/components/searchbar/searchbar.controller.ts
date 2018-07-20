import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface SearchbarState {
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SearchbarController {
  private state: BehaviorSubject<SearchbarState>;

  constructor() {
    this.state = new BehaviorSubject({
      isOpen: false
    });
  }

  public open(): void {
    if (!this.state.getValue().isOpen) {
      this.state.next({ isOpen: true });
    }
  }

  public close(): void {
    if (this.state.getValue().isOpen) {
      this.state.next({ isOpen: false });
    }
  }

  public toggle(): void {
    if (this.state.getValue().isOpen) {
      this.state.next({ isOpen: false });
    } else {
      this.state.next({ isOpen: true });
    }
  }

  public getState(): BehaviorSubject<SearchbarState> {
    return this.state;
  }
}
