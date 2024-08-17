
import { world_map } from '../../../world-map';
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkerService } from '@syncfusion/ej2-angular-maps'
import { MapsTheme, Maps, Legend, Marker, MapsTooltip, ILoadEventArgs } from '@syncfusion/ej2-angular-maps';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MapsModule, ],
  providers: [MarkerService],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent  implements OnInit {
  public shapeData: object = world_map;
    public data?: any[]
    public locations?: any[]
        public markerSettings?: object;
         public latitude?: number =0 ;
        public longitude?: number =0;
        private dataSource: { latitude: any; longitude: any }[] = [
          { latitude: 49.95121990866204, longitude: 18.468749999999998 },
          { latitude: 59.88893689676585, longitude: -109.3359375 },
          { latitude: -6.64607562172573, longitude: -55.54687499999999 }
        ];
    constructor(private myService: GeolocationService) {
       
      
    }
    ngOnInit(): void {
        this.shapeData = world_map;
        
        this.markerSettings = [{
            visible: true,
            height: 20,
            width: 20,
            dataSource: this.dataSource,
            animationDuration: 0,
        }]
        
        console.log(this.markerSettings)
        this.locations=["singapore","hong kong","sydney","melbourne","auckland"] //for now next locations will be retrieved through a backend web service
        for (let i = 0; i < this.locations.length; i++) {
          const location = this.locations[i];
        this.myService.getCoordinates(location).subscribe({
          next: (response) => {
            // Extract latitude and longitude from the response
            if (response.data && response.data.length > 0) {
              
              const location = response.data[0];
              this.latitude = location.latitude;
              this.longitude = location.longitude;
              const transformedLocation = {
                latitude: this.latitude,
                longitude: this.longitude
              };
              this.dataSource.push(transformedLocation)
            }
            
          },
          error: (error) => {
            console.error('Error fetching location data:', error);
          }
        });
      }
   }
   
}
