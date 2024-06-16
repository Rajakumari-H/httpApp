import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  locationName: string = '';
  data:any;
  isShow: boolean;
  msgNot: string;
  showMsg: boolean;
  loader:boolean = false
  constructor(public httpServ: HttpService, public toast: ToastrService){}

  searchWeather(){
    this.loader = true;
       this.httpServ.weather(this.locationName).subscribe({
        next: (data: any) =>{
          this.data = data;
          this.msgNot = data.statusText;
          this.isShow = true;
          this. loader = false;
        }, error: (error: any) =>{
          this.toast.error(error.error.message);
          this.showMsg = true;
          this.isShow = false;
          this.loader =false;
        }
        
       });
  }
}
