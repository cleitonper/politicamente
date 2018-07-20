export interface ApiResponseList<T> {
  dados: Array<T>;
  links?: Array<any>;
  nextPage?: number;
}
