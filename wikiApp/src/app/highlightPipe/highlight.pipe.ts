import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(text: string, search: string): string {
    return text.replace(new RegExp(search, 'gi'), `<b>${search}</b>`);
  }
}