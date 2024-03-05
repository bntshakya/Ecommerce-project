import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipse',
})
export class EllipsePipe implements PipeTransform {
  transform(value: string, words: number = 17): string {
    let res: string | string[] = value.split(' ');
    if (res.length > words) {
      res.length = words;
      return res.join(' ') + '...';
    }
    return value;
  }
}
