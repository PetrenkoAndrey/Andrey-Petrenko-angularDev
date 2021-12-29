export interface ICurrentWeatherItem {
    EpochTime: number,
    HasPrecipitation: boolean,
    IsDayTime: boolean,
    Link: string,
    LocalObservationDateTime: Date,
    MobileLink: string,
    PrecipitationType: null,
    Temperature: {
        Metric: {
            Value: number,
            Unit: string,
            UnitType: number
        },
        Imperial: {
            Value: number,
            Unit: string,
            UnitType: number
        }
    }
    WeatherIcon: number,
    WeatherText: string
}
