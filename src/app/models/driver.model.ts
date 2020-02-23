export interface Driver {
    id: string;
    url: string;
    name: string;
    dateOfBirth: Date;
    nationality: string;
    wins: number;
    current_constructor: string;
}

export interface Race {
    id: number;
    round: number;
    raceName: string;
    country: string;
    position: number;
    grid: number;
    car_constructor: string;
}
