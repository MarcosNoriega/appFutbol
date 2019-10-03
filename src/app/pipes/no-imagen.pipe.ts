import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      return 'assets/img/noimage.png';
    }

    if (value === null) {
      return 'assets/img/noimage.png';
    }

    return value;
  }

}
