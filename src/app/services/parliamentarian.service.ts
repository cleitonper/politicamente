import { Injectable, Injector } from '@angular/core';
import { Observable, of }       from 'rxjs';
import { map }                  from 'rxjs/operators';

import { ApiService }           from './api.service';
import { ApiResponse }          from '../shared/model/api-response-list.model';
import {
  Parliamentarian,
  ParliamentarianList
}                               from '../shared/model/parliamentarian.model';
import { Page }                 from '../shared/model/page.model';
import {
  generateParliamentarianList,
  generateParliamentarian,
}                               from '../shared/util';

@Injectable({
  providedIn: 'root'
})
export class ParliamentarianService extends ApiService {
  protected resourceName = 'deputados';

  constructor(injector: Injector) {
    super(injector);
  }

  public list(params?): Observable<ParliamentarianList> {
    const url = `${this.apiRoot}/${this.resourceName}`;
    const options = { params: params || {} };
    const request = this.http.get<ApiResponse<Array<Parliamentarian>>>(url, options).pipe(
      map((list: ApiResponse<Array<Parliamentarian>>) => (
        { data: list.dados, page: this.extractPage(list.links) }
      )),
    );

    return request;
  }

  public read(id: number): Observable<Parliamentarian> {
    const url = `${this.apiRoot}/${this.resourceName}/${id}`;
    const request = this.http.get<ApiResponse<Parliamentarian>>(url).pipe(
      map((parliamentarian) => parliamentarian.dados),
      map(
        (parliamentarian) =>
          (parliamentarian.ultimoStatus)
            ? { ...parliamentarian, ...parliamentarian.ultimoStatus }
            : parliamentarian
      ),
    );

    return request;
  }

  private extractPage(links: Array<any>): Page {
    const regex: RegExp = /pagina=(\d+)/;
    const pages = links.reduce((page, link) => {
      page[link.rel] = +regex.exec(link.href)[1];
      return page;
    }, {});

    return pages;
  }
}

export class MockParliamentarianService extends ParliamentarianService {
  public list(params?): Observable<ParliamentarianList> {
    return of(generateParliamentarianList());
  }

  public read(id: number): Observable<Parliamentarian> {
    return of(generateParliamentarian(1, 'Joana'));
  }
}
