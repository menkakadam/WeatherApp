import { Component, OnInit } from '@angular/core';
import { WeatherbitService } from './service/weatherbit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cites: string[] = ["Toronto", "Raleigh", "Ottawa", "Edmonton", "Calgary"];
  city: string = "";
  weathers: any;
  showLoader: boolean = false;

  constructor(private weatherbitService: WeatherbitService) { }

  ngOnInit(): void {
  }
  
  apply() {
    this.showLoader = true;
    this.weatherbitService.getByCityName(this.city).subscribe((res: any) => {
      this.showLoader = false;
      this.weathers = res.data;
    })
  }

  close() {
    this.city = "";
    this.weathers = [];
  }
}
