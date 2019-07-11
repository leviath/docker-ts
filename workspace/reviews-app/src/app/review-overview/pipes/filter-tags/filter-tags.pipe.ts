import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'flagFilter'
})
export class FlagFilterPipe implements PipeTransform {
  public transform(items: any[], term: string): any {
    if (!term || term === '') {
      return items;
    }

    return items.filter(item => item.markDescription === term);
  }
}
