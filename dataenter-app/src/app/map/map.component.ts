import { world_map } from '../../../world-map';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkerService } from '@syncfusion/ej2-angular-maps';
import { MapsTheme, Maps, Legend, Marker, MapsTooltip, ILoadEventArgs } from '@syncfusion/ej2-angular-maps';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MapsModule, CommonModule],
  providers: [MarkerService],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public shapeData: object = world_map;
  public data?: any[];
  public locations: any[] = [];
  public markerSettings?: any[];
  public latitude?: number = 0;
  public longitude?: number = 0;
  private dataSource: { latitude: any; longitude: any }[] = [];

  constructor(private myService: GeolocationService) {}

  ngOnInit(): void {
    this.shapeData = world_map;
    this.loadData();
  }

  private loadData(): void {
    this.myService.getDataCentersLocations().subscribe({
      next: (response) => {
        if (response.length > 0) {
          const locations = response.map((item: { location: any; }) => item.location);
          this.locations = [...locations];

          const coordinateRequests = this.locations.map(location =>
            this.myService.getCoordinates(location)
          );

          forkJoin(coordinateRequests).subscribe({
            next: (responses) => {
              this.dataSource = responses
                .filter(response => response.data && response.data.length > 0)
                .map(response => ({
                  latitude: response.data[0].latitude,
                  longitude: response.data[0].longitude
                }));

              this.markerSettings = [{
                visible: true,
                height: 20,
                width: 20,
                dataSource: this.dataSource,
                animationDuration: 2
              }];
              
            },
            error: (error) => {
              console.error('Error fetching coordinates data:', error);
            }
          });
        } else {
          console.log('No locations found.');
        }
      },
      error: (error) => {
        console.error('Error fetching data center locations:', error);
      }
    });
  }
}
