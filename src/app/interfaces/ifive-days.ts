export interface IFiveDays {
    DailyForecasts: IFiveDaysItem[],
    Headline: {
        Category: string,
        EffectiveDate: Date,
        EffectiveEpochDate: number
        EndDate: Date,
        EndEpochDate: number
        Link: string,
        MobileLink: string,
        Severity: number,
        Text: string,
    }
}
export interface IFiveDaysItem {
    Date: Date
    Day: IWeatherIcon,
    EpochDate: number,
    Link: string,
    MobileLink: string,
    Night: IWeatherIcon,
    Temperature: {
        Minimum: ITemperature,
        Maximum: ITemperature
    },
    Sources: string[]
}
export interface ITemperature {
    Value: number,
    Unit: string,
    UnitType: number
}
export interface IWeatherIcon {
    Icon: number,
    IconPhrase: string,
    HasPrecipitation: boolean
}
