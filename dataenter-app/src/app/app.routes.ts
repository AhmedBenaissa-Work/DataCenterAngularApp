import { Routes } from '@angular/router';
import { DatacentersComponent } from './datacenters/datacenters.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [{ path: 'datacenters', component: DatacentersComponent },{ path: 'map', component: MapComponent }];
