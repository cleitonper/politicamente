import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noDash'
})
export class NoDashPipe implements PipeTransform {
  transform(value: string): string {
    return (!!value) ? value.replace('-', '') : '';
  }
}
