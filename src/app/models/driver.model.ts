export class Driver {
    id: string;
    url: string;
    name: string;
    dateOfBirth: Date;
    nationality: string;
    wins: number;
    current_constructor: string;
    raceResults: Race[];

    constructor(id: string, url: string, givenName: string, familyName: string, dateOfBirth: string, nationality: string, wins: number, current_constructor: string) {
        this.id = id;
        this.url = url;
        this.name = givenName + ' ' + familyName;
        this.dateOfBirth = new Date(dateOfBirth);
        this.nationality = nationality;
        this.wins = wins;
        this.current_constructor = current_constructor;

    }
}

export class Race {
    id: number;
    round: number;
    raceName: string;
    country: string;
    position: number;
    grid: number;
    car_constructor: string;

    constructor(round: number, raceName: string, country: string, position: number, grid: number, car_constructor: string) {
        this.round = round;
        this.id = round;
        this.raceName = raceName;
        this.country = country;
        this.position = position;
        this.grid = grid;
        this.car_constructor = car_constructor;
    }
}
