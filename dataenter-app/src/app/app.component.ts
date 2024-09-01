import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component';
import { DatacentersComponent } from './datacenters/datacenters.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MapComponent,DatacentersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dataenter-app';
}
