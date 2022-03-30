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
  dropdownChange(){
    if(this.city){
      this.apply();
    } else{
      this.close();
    }
  }
  apply() {
    this.showLoader = true;
    this.weatherbitService.getByCityName(this.city).subscribe((res: any) => {
      this.showLoader = false;
      this.weathers = res.data;
      // if you want only 5 dyas show data then below use below code.
      if (this.weathers.length > 5) {
        this.weathers.length = 5;
      }
    })
  }

  close() {
    this.city = "";
    this.weathers = [];
  }
}
