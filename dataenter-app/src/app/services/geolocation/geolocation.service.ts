
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  private apiUrl = 'https://api.positionstack.com/v1/forward';
  private accessKey = '1047f71741d4cda7128c570b65b5c6de';

  constructor(private http: HttpClient) { }

  // Method to make the API request
  getCoordinates(query: string): Observable<any> {
    // Set the query parameters
    const params = new HttpParams()
      .set('access_key', this.accessKey)
      .set('query', query);

    // Make the GET request to the API
    return this.http.get(this.apiUrl, { params });
  }
  getDataCentersLocations(): Observable<any> {
    // Set the query parameters
    const username = 'user';
const password = 'password';
const headers = new HttpHeaders({
  'Authorization': 'Basic ' + btoa(username + ':' + password)
});

    // Make the GET request to the API
    return this.http.get("/api/datacenters/locations",{headers});
  }
}
