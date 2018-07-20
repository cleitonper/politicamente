import { Page } from "./model/page.model";
import { Parliamentarian, ParliamentarianList } from "./model/parliamentarian.model";

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
