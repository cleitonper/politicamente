import { Page } from './page.model';

export interface Parliamentarian {
    /**
     * Parliamentarian identification number
     * based on the API.
    **/
    id: number;

    /**
     * Page data uri
    **/
    uri: string;

    /**
     * Full name
    **/
    nome: string;

    /**
     * Political party initials
    **/
    siglaPartido: string;

    /**
     * Political party data uri
    **/
    uriPartido: string;

    /**
     * State initials
    **/
    siglaUf: string;

    /**
     * Legislature id
    **/
    idLegislatura: number;

    /**
     * Photo uri
    **/
    urlFoto: string;
}

export interface ParliamentarianParams {
    id?: Array<number>;

    /**
     * Full or partial name of the
     * searched parliamentarian.
    **/
    nome?: string;

    /**
     * One or more legislature number
     * of the serached parliamentarian.
     **/
    idLegislatura?: Array<number>;

    /**
     * Federation Unit identifier filter
     **/
    siglaUf?: Array<string>;

    /**
     * Political Party identifier.
     **/
    siglaPartido?: Array<string>;

    /**
     * Gender of searched parliamentaria.
     * Use 'M' to male or 'F' to female.
     **/
    siglaSexo?: string;

    /**
     * Page number corresponding to the
     * results presented.
     **/
    pagina?: number;

    /**
     * Items quantity per page.
     **/
    itens?: number;

    /**
     * Order of presentation of the items.
     * Use 'asc' or 'desc'.
     **/
    ordem?: string;

    /**
     * Field that will be ordenate the query.
     * Possibles values are: id, idLegislatura, nome,
     * siglaUF or siglaPartido.
     **/
    ordernanrPor?: string;
}

export interface ParliamentarianList {
  data: Array<Parliamentarian>;
  page: Page;
}
