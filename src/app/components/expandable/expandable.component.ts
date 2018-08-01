import {
  Component,
  ElementRef,
  HostListener,
  SimpleChanges,
  OnChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnChanges {
  public height: number;

  @Input()
  open: boolean;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.stopPropagation();
  }

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['open'].currentValue) {
      this.height = this.elementRef.nativeElement.firstChild.scrollHeight;
    } else {
      this.height = 0;
    }
  }

  private stop(event: MouseEvent) {
    event.stopPropagation();
  }
}
