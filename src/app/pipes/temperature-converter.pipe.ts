import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {
  metric = localStorage.getItem('Metric') || 'Metric'
  transform(value: number) {
    if (value) {
      if (this.metric === 'Metric') {
        return value.toFixed() + '°C';
      } else {
        var tempareature = (value * 1.8) + 32;
        return tempareature.toFixed() + '°F';
      }
    }


  }

}
