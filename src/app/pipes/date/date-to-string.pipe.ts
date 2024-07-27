import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToString',
  standalone: true,
})
export class DateToStringPipe implements PipeTransform {
  transform(date: Date): String {
    return `${date.getHours()}:${date.getMinutes()}, ${date.getDate()} ${date.toLocaleString(
      'default',
      { month: 'short' }
    )}`;
  }
}
