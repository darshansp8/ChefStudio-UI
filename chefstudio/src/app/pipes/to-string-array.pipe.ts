import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toStringArray'
})
export class ToStringArrayPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value){
      var instructionList = value.split(".,");
    }
    return instructionList;
  }

}
