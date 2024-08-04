import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender === 'Male')
      return 'Mr. ' + name;
    else
      return 'Mrs. ' + name;
  }

}
