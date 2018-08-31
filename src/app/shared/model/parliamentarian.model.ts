import { Page } from './page.model';

/**
 * For more details check API Reference:
 * https://dadosabertos.camara.leg.br/swagger/api.html
 **/
export interface Parliamentarian {
    id: number;
    uri: string;
    cpf?: string;
    nome?: string;
    nomeCivil?: string;
    nomeEleitoral?: string;
    sexo?: string;
    urlWebsite?: string;
    redeSocial?: string;
    siglaPartido?: string;
    uriPartido?: string;
    siglaUf?: string;
    ufNascimento?: string;
    municipioNascimento?: string;
    escolaridade?: string;
    idLegislatura?: number;
    urlFoto?: string;
    dataNascimento?: string;
    dataFalecimento?: string;
    data?: string;
    gabinete?: {
      nome:     string,
      predio:   string,
      sala:     string,
      andar:    string,
      telefone: string,
      email:    string,
    };
    situacao?: string;
    condicaoEleitoral?: string;
    descricaoStatus?: string;
    ultimoStatus?: Partial<Parliamentarian>;
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
