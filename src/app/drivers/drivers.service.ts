import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Driver, Race } from '@app-models/driver.model';
import { environment } from '../../environments/environment';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()

export class DriversService {
    drivers: Driver[];
    searchedDrivers: Driver[];

    constructor(private http: HttpClient) {}

    getDrivers(): Observable<Driver[]> {
        return this.http.get<Driver[]>(environment.API_ENDPOINTS.DRIVERS).pipe(
            map(res => this.formatDrivers(res))
        );
    }

    searchDrivers(term: string): Observable<Driver[]> {
        if (!term || !term.trim()) {
          // if not search term, return empty hero array.
          return this.drivers ? of(this.drivers) : this.getDrivers();
        }
        this.searchedDrivers = this.drivers.filter((driver: Driver) => {
            if(driver.name.indexOf(term) != -1)
                return driver;
        })
        return of(this.searchedDrivers)
      }

    getDriverRaces(driverId: string): Observable<Race[]> {
        return this.http.get(environment.API_ENDPOINTS.DRIVER_DETAILS +  driverId + environment.API_ENDPOINTS.FORMAT).pipe(
            map(res => {
                return this.formatDriverDetails(res);
            })
        )
    }

    formatDrivers(response: any): Driver[] {
        this.drivers = [];
        for(let driver of response['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings']) {
            this.drivers.push(new Driver(driver['Driver'].driverId,
                                    driver['Driver'].url,
                                    driver['Driver'].givenName,
                                    driver['Driver'].familyName,
                                    driver['Driver'].dateOfBirth,
                                    driver['Driver'].nationality,
                                    parseInt(driver.wins),
                                    driver['Constructors'][0].name));
        }
        
        return this.drivers;
    }

    formatDriverDetails(response: any): Race[] {
        let results: Race[] = [];
        for(let race of response['MRData']['RaceTable']['Races']) {
            results.push(new Race(race.round,
                                    race.raceName,
                                    race['Circuit']['Location'].country,
                                    race['Results'][0].position,
                                    race['Results'][0].grid,
                                    race['Results'][0]['Constructor'].name));
        }
        return results;
    }
}