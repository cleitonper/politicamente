export interface ApiResponse<T> {
  dados: T;
  links?: Array<any>;
  nextPage?: number;
}
