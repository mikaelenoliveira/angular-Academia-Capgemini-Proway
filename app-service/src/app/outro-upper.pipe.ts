import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'outroUpper'
})
export class OutroUpperPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let x :any = value
    return x.toUpperCase();
  }

}
