import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DatacentersService {

  constructor(private http: HttpClient) { }

  getDataCenters(): Observable<any> {
    // Set the query parameters
    const username = 'user';
const password = 'password';
const headers = new HttpHeaders({
  'Authorization': 'Basic ' + btoa(username + ':' + password)
});

    // Make the GET request to the API
    return this.http.get("/api/datacenters/",{headers});
  }
}
