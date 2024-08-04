import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: number): number {
    return value <= 1 ? 1 : this.transform(value - 1) * value;
  }

}
