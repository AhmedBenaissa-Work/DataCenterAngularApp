
import { world_map } from '../../../world-map';
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { Component, ViewEncapsulation } from '@angular/core';
import { MapsTheme, Maps, Legend, Marker, MapsTooltip, ILoadEventArgs } from '@syncfusion/ej2-angular-maps';
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MapsModule, ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  public shapeData: object = world_map;
}
