import { HttpErrorResponse } from '@angular/common/http';

import { Page }              from './model/page.model';
import {
  Parliamentarian,
  ParliamentarianList,
}                             from './model/parliamentarian.model';
import { RGB } from './model/rgb.model';

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

export const generateParliamentarianList = (): ParliamentarianList => {
    const page: Page = { self: 1, next: 2, first: 1, last: 4 };
    const parliamentarian1: Parliamentarian = generateParliamentarian(1, 'Joana');
    const parliamentarian2: Parliamentarian = generateParliamentarian(2, 'Mario');
    const parliamentarians = [ parliamentarian1, parliamentarian2 ];
    const parliamentarianList: ParliamentarianList = { data: parliamentarians, page: page };

    return parliamentarianList;
};


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
};

export const getAverageColor = (img: HTMLImageElement): RGB => {
  const canvas = document.createElement('canvas');
  const ctx    = canvas.getContext('2d');
  const width  = canvas.width  = img.naturalWidth;
  const height = canvas.height = img.naturalHeight;

  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  let r = 0;
  let g = 0;
  let b = 0;

  for (let i = 0, l = data.length; i < l; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
  }

  r = Math.floor(r / (data.length / 4));
  g = Math.floor(g / (data.length / 4));
  b = Math.floor(b / (data.length / 4));

  return { r: r, g: g, b: b };
};

export const getBrightness = (color: RGB): number => {
  /**
   * Based on the W3C recomendation
   * link: http://www.w3.org/TR/AERT#color-contrast
   **/
  return Math.round(
    ((color.r * 299) + (color.g * 587) + (color.b * 144)) / 1000
  );
};
