import { Component, Input, OnInit } from '@angular/core';
import { IFiveDaysItem } from 'src/app/interfaces/ifive-days-item';

@Component({
  selector: 'app-five-days-weather',
  templateUrl: './five-days-weather.component.html',
  styleUrls: ['./five-days-weather.component.scss']
})
export class FiveDaysWeatherComponent implements OnInit {
  @Input() fiveDaysWeather: IFiveDaysItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
