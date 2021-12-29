import { IFiveDaysItem } from "./ifive-days-item";

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
