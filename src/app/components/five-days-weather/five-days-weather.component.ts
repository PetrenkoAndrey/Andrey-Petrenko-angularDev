import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-days-weather',
  templateUrl: './five-days-weather.component.html',
  styleUrls: ['./five-days-weather.component.scss']
})
export class FiveDaysWeatherComponent implements OnInit {
  @Input() fiveDaysWeather: any;

  constructor() { }

  ngOnInit(): void {
  }

}
