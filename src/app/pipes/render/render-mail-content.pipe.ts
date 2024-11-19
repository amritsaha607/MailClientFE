import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'renderMailContent',
  standalone: true,
})
export class RenderMailContentPipe implements PipeTransform {
  transform(rawMailContent: string | undefined, ...args: unknown[]): unknown {
    if (rawMailContent == undefined) {
      return '';
    }
    return rawMailContent.replaceAll(' ', '&nbsp').replaceAll(/\n/g, '<br>');
  }
}
