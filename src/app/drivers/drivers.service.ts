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
            map((res: any) => {
                let drivers: Driver[] = res['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'].map(d => {
                    return {
                        id: d['Driver'].driverId,
                        url: d['Driver'].url,
                        name: d['Driver'].givenName + ' ' + d['Driver'].familyName,
                        dateOfBirth: d['Driver'].dateOfBirth,
                        nationality: d['Driver'].nationality,
                        wins: parseInt(d.wins),
                        current_constructor: d['Constructors'][0].name
                    }
                })    
                return drivers
            })
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
            map((res: any) => {
                let races: Race[] = res['MRData']['RaceTable']['Races'].map(r => {
                    return {
                        id: r.round,
                        round: r.round,
                        raceName: r.raceName,
                        country: r['Circuit']['Location'].country,
                        position: r['Results'][0].position,
                        grid: r['Results'][0].grid,
                        car_constructor: r['Results'][0]['Constructor'].name
                    }
                })
                return races;
            })
        )
    }
}