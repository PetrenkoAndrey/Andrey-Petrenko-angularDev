export interface ILocationItem {
    AdministrativeArea: ICountry,
    Country: ICountry,
    Key: string,
    LocalizedName: string,
    Rank: number,
    Type: string,
    Version: number
}

export interface ICountry {
    ID: string,
    LocalizedName: string
}
