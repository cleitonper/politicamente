import {
  Component,
  OnInit,
  ViewEncapsulation,
}                       from '@angular/core';
import * as Typed       from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  public topics: Array<Object>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initializeContent();
    this.initializeTypingAnimation();
  }

  public openPage(page: string) {
    return this.router.navigateByUrl(page);
  }

  private initializeTypingAnimation(): void {
    const options = {
      stringsElement: '#type-strings',
      showCursor: true,
      cursorChar: '|',
      startDelay: 1200,
      backSpeed: 40,
      typeSpeed: 40,
    };

    const typed = new Typed('#typing', options);
  }

  private initializeContent(): void {
    this.topics = [
      {
        name: 'parliamentarians',
        title: 'Parlamentares',
        content: 'Acompanhe as atividades deempenhadas pelos parlamentares brasileiros.',
        label: 'Conheça',
        hasCustomBottom: false,
      },
      {
        name: 'parties',
        title: 'Partidos',
        content: 'Conheça os partidos politicos que compõem a máquina estatal.',
        label: 'Conheça',
        hasCustomBottom: true,
      },
      {
        name: 'events',
        title: 'Eventos',
        content: 'Informe-se sobre os eventos que acontecerão no parlamento.',
        label: 'Participe',
        hasCustomBottom: true,
      },
      {
        name: 'propositions',
        title: 'Proposições',
        content: 'Projetos de lei, medidas provisórias, emendas e outros tipos de decisões da camara.',
        label: 'Acompanhe',
        hasCustomBottom: false,
      }
    ];
  }
}

// TODO: break this in small components
