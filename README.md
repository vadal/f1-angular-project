# F1 Current Season's Driver Standings

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Summary
1. ngRx is used for state management
2. Unit tests are created
3. e2e tests are not implemented
4. Components don't have direct access to the store. They access it via RootStoreFacade.
5. There are two routes: /drivers and /drivers/:id/details (example: /drivers/hamilton/details)
6. Drivers table supports filtering 
7. Races table supports sorting
8. A breadcrumb is implemented to help users navigate 
9. No third party styling library is used
10.If data are not loaded, a message appears instead of table
11.If the request is on progress, a loaded appears at the top of the page

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
