import { ITemperature } from "./ifive-days-item";
export interface ICurrentWeatherItem {
    EpochTime: number,
    HasPrecipitation: boolean,
    IsDayTime: boolean,
    Link: string,
    LocalObservationDateTime: Date,
    MobileLink: string,
    PrecipitationType: null,
    Temperature: {
        Metric: ITemperature,
        Imperial: ITemperature
    }
    WeatherIcon: number,
    WeatherText: string
}
