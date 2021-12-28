import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-days-weather',
  templateUrl: './five-days-weather.component.html',
  styleUrls: ['./five-days-weather.component.scss']
})
export class FiveDaysWeatherComponent implements OnInit {
  @Input() dailyForecast: any;
  // dailyForecast = [{
  //   Date: "2021-12-23T07:00:00+02:00",
  //   EpochDate: 1640235600,
  //   Temperature: {
  //     Minimum: {
  //       Value: -9.1,
  //       Unit: "C",
  //       UnitType: 17
  //     },
  //     Maximum: {
  //       Value: -6.9,
  //       Unit: "C",
  //       UnitType: 17
  //     }
  //   },
  //   Day: {
  //     Icon: 4,
  //     IconPhrase: "Intermittent clouds",
  //     HasPrecipitation: false
  //   },
  //   Night: {
  //     Icon: 22,
  //     IconPhrase: "Snow",
  //     HasPrecipitation: true,
  //     PrecipitationType: "Snow",
  //     PrecipitationIntensity: "Moderate"
  //   },
  //   Sources: [
  //     "AccuWeather"
  //   ],
  //   MobileLink: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=1&unit=c&lang=en-us",
  //   Link: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=1&unit=c&lang=en-us"
  // },
  // {
  //   Date: "2021-12-24T07:00:00+02:00",
  //   EpochDate: 1640322000,
  //   Temperature: {
  //     Minimum: {
  //       Value: 0.2,
  //       Unit: "C",
  //       UnitType: 17
  //     },
  //     Maximum: {
  //       Value: 0.9,
  //       Unit: "C",
  //       UnitType: 17
  //     }
  //   },
  //   Day: {
  //     Icon: 22,
  //     IconPhrase: "Snow",
  //     HasPrecipitation: true,
  //     PrecipitationType: "Snow",
  //     PrecipitationIntensity: "Moderate"
  //   },
  //   Night: {
  //     Icon: 29,
  //     IconPhrase: "Rain and snow",
  //     HasPrecipitation: true,
  //     PrecipitationType: "Mixed",
  //     PrecipitationIntensity: "Light"
  //   },
  //   Sources: [
  //     "AccuWeather"
  //   ],
  //   MobileLink: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=2&unit=c&lang=en-us",
  //   Link: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=2&unit=c&lang=en-us"
  // },
  // {
  //   Date: "2021-12-25T07:00:00+02:00",
  //   EpochDate: 1640408400,
  //   Temperature: {
  //     Minimum: {
  //       Value: -8.0,
  //       Unit: "C",
  //       UnitType: 17
  //     },
  //     Maximum: {
  //       Value: 0.5,
  //       Unit: "C",
  //       UnitType: 17
  //     }
  //   },
  //   Day: {
  //     Icon: 19,
  //     IconPhrase: "Flurries",
  //     HasPrecipitation: true,
  //     "PrecipitationType": "Snow",
  //     "PrecipitationIntensity": "Light"
  //   },
  //   Night: {
  //     Icon: 38,
  //     IconPhrase: "Mostly cloudy",
  //     HasPrecipitation: false
  //   },
  //   Sources: [
  //     "AccuWeather"
  //   ],
  //   MobileLink: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=3&unit=c&lang=en-us",
  //   Link: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=3&unit=c&lang=en-us"
  // },
  // {
  //   Date: "2021-12-26T07:00:00+02:00",
  //   EpochDate: 1640494800,
  //   Temperature: {
  //     Minimum: {
  //       Value: -5.3,
  //       Unit: "C",
  //       UnitType: 17
  //     },
  //     Maximum: {
  //       Value: -1.5,
  //       Unit: "C",
  //       UnitType: 17
  //     }
  //   },
  //   Day: {
  //     Icon: 7,
  //     IconPhrase: "Cloudy",
  //     HasPrecipitation: false
  //   },
  //   Night: {
  //     Icon: 38,
  //     IconPhrase: "Mostly cloudy",
  //     HasPrecipitation: false
  //   },
  //   Sources: [
  //     "AccuWeather"
  //   ],
  //   MobileLink: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=4&unit=c&lang=en-us",
  //   Link: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=4&unit=c&lang=en-us"
  // },
  // {
  //   Date: "2021-12-27T07:00:00+02:00",
  //   EpochDate: 1640581200,
  //   Temperature: {
  //     Minimum: {
  //       Value: -1.7,
  //       Unit: "C",
  //       UnitType: 17
  //     },
  //     Maximum: {
  //       Value: -1.4,
  //       Unit: "C",
  //       UnitType: 17
  //     }
  //   },
  //   Day: {
  //     Icon: 7,
  //     IconPhrase: "Cloudy",
  //     HasPrecipitation: false
  //   },
  //   Night: {
  //     Icon: 36,
  //     IconPhrase: "Intermittent clouds",
  //     HasPrecipitation: false
  //   },
  //   Sources: [
  //     "AccuWeather"
  //   ],
  //   MobileLink: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=5&unit=c&lang=en-us",
  //   Link: "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=5&unit=c&lang=en-us"
  // }]
  constructor() { }

  ngOnInit(): void {
  }

}
