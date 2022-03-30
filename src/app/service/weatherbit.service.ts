import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherbitService {
  apiUrl: any = environment.apiUrl;
  key: any = environment.key;

  constructor(private http: HttpClient) { }

  getByCityName(city: string){
    return this.http.get(this.apiUrl+"v2.0/forecast/daily?city=" + city +"&key="+this.key)
  }
  
}
