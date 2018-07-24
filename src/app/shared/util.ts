import { Page } from "./model/page.model";
import { Parliamentarian, ParliamentarianList } from "./model/parliamentarian.model";
import { HttpErrorResponse } from "@angular/common/http";

export const generateParliamentarianList = (): ParliamentarianList => {
    const page: Page = { self: 1, next: 2, first: 1, last: 4 };
    const parliamentarian1: Parliamentarian = generateParliamentarian(1, 'Joana')
    const parliamentarian2: Parliamentarian = generateParliamentarian(2, 'Mario');
    const parliamentarians = [ parliamentarian1, parliamentarian2 ];
    const parliamentarianList: ParliamentarianList = { data: parliamentarians, page: page };
    
    return parliamentarianList;
}

export const generateParliamentarian = (id: number, name: string) => ({
  id: id,
  nome: name,
  siglaPartido: 'PT',
  siglaUf: 'SP',
  idLegislatura: 2222,
  uri: 'http...',
  uriPartido: 'http...',
  urlFoto: 'assets/imgs/art/avatar.svg',
});


const offlineError = {
  status: '000',
  title: 'Você está desconectado',
  detail: 'É necessária uma conexão ativa com a internet para acessar os recursos desta página.'
};

const notFoundError = {
  status: '405',
  title: 'Termo não encontrado',
  detail: 'Não foi possível encontrar os dados solicitados. Tente novamente com outros parâmetros de busca.'
};

export const customError = {
  offline: new HttpErrorResponse({ error: offlineError }),
  notFound: new HttpErrorResponse({ error: notFoundError }),
}
