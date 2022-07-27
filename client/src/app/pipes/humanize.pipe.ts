import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanize'
})
export class HumanizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value==="id") {
      return null;
    }
    else {
      // return value.charAt(0).toUpperCase() + value.slice(1);
      return value.toUpperCase();
    }
  }

}
