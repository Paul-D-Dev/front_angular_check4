import { Ticket } from './../models/ticket';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isChild'
})
export class IsChildPipe implements PipeTransform {

  transform(value): string {
      return;

  }

}


// Value = true false
// si true return element.price "Enfant"
// si false return element.price "Adulte"
