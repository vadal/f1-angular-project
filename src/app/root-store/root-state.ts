import { BreadcrumbStoreState } from './breadcrumb-store';
import { DriverStoreState } from './driver-store';
import { RaceStoreState } from './race-store';

export interface State {
    breadcrumb: BreadcrumbStoreState.State;
    driver: DriverStoreState.State;
    race: RaceStoreState.State;
}
