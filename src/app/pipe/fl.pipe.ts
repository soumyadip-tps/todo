import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fl'
})
export class FlPipe implements PipeTransform {

  transform(value: any, type: any): any {
    let temp = value;
    switch (type) {

      case 'done':
        temp = temp.filter(item => {
          return item.status;
        })
        break;
      case 'undone':
        temp = temp.filter(item => {
          return !item.status;
        })
        break;
      case 'high':
        temp = temp.filter(item => {
          return item.priority=="high";
        })
        break;
      case 'medium':
        temp = temp.filter(item => {
          return item.priority=="medium";
        })
        break;
      case 'low':
        temp = temp.filter(item => {
          return item.priority=="low";
        })
        break;
    }

    return temp;
  }

}
