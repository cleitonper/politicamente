import { Injectable, Injector } from '@angular/core';
import { HttpClient }           from '@angular/common/http';

@Injectable()
export abstract class ApiService {
  protected apiRoot = 'https://dadosabertos.camara.leg.br/api/v2';
  protected resourceName: string;

  protected http: HttpClient;

  constructor(
    injector: Injector
  ) {
    this.http = injector.get(HttpClient);
  }
}
