import { Component, Input } from '@angular/core';
import { Router }           from '@angular/router';
import { MenuController }   from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input()
  contentId: string;

  constructor(
    private router: Router,
    private menu: MenuController,
  ) {}

  public openPage(page: string): Promise<boolean> {
    this.menu.close();
    return this.router.navigateByUrl(page);
  }
}
