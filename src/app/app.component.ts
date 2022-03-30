import { Component, OnInit } from '@angular/core';
import { WeatherbitService } from './service/weatherbit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firstApp';
  cites = ["Toronto", "Raleigh"];
  city = "";
  weathers: any;

  constructor(private weatherbitService: WeatherbitService) { }

  ngOnInit(): void {
    this.apply();
  }
  apply() {
    this.weatherbitService.getByCityName(this.city).subscribe((res: any) => {
      this.weathers = res.data;
    })
  }

  close() {
    this.city = "";
    this.weathers = [];
  }
}
