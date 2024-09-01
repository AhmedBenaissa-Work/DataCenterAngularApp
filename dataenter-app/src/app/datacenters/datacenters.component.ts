import { Component, OnInit } from '@angular/core';
import { DatacentersService } from '../services/datacenters/datacenters.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-datacenters',
  standalone: true,
  imports: [CommonModule,NavbarComponent,MapComponent],
  templateUrl: 'datacenters.component.html',
  styleUrl: './datacenters.component.css'
})
export class DatacentersComponent implements OnInit{
  title = 'Internationzation Sample';
  currentDate: Date = new Date(Date.now());
  response : any
  currentPage = 1;
  itemsPerPage = 3;
  data: any; // Replace any[] with your data type
  paginatedData: any;
  constructor(private apiService: DatacentersService) { }
  ngOnInit(): void {
   
    this.apiService.getDataCenters().subscribe((data: any) => {
      console.log(data)
      this.response=data
      this.data=data
    });
    
    };
    updatePageData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.paginatedData = this.data.slice(startIndex, endIndex);
    }
  
    onPageChange(pageNumber: number) {
      this.currentPage = pageNumber;
      this.updatePageData();
    }

}
