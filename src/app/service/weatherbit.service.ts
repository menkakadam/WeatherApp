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
  // apiUrl: 'https://api.weatherbit.io/',
  // key:'a91d62e27ef14cf78a3f12b1dd5fb86a'

  getByCityName(city: string){
    // https://api.weatherbit.io/v2.0/current?lat=50&lon=40&key=a91d62e27ef14cf78a3f12b1dd5fb86a
    // https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh&key=a91d62e27ef14cf78a3f12b1dd5fb86a
    return this.http.get(this.apiUrl+"v2.0/forecast/daily?city=" + city +"&key="+this.key)
  }
  
}
