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
