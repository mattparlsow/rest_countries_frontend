interface ApiResponse {
    message: Array<Country | CountryDetails | string>
}

interface Country {
    name: string,
    flags: Flags
}

interface CountryDetails {
    name: string,
    capital: string,
    population: number,
    alpha3code: string,
    currencies: Array<Currencies>,
    languages: Array<Languages>,
    flags: Flags,

}

interface Currencies {
    code: string,
    name: string,
    symbol: string,
}

interface Languages {
    name: string
}

interface Flags {
    png: string,
    svg: string
}

export {Country, CountryDetails, ApiResponse};
