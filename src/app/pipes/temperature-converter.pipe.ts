import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number) {
    if (localStorage.getItem('Metric') === 'Metric') {
      return value.toFixed() + '°C';
    } else {
      var tempareature = (value * 1.8) + 32;
      return tempareature.toFixed() + '°F';
    }

  }

}
