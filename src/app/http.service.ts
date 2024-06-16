import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  getMethod(){
     return this.http.get<any[]>('assets/data.json');
  }

  isLoggedUser(){
    return !!localStorage.getItem('userName');
  }

  weather(city:string){
   let queryParams = new HttpParams();
   queryParams = queryParams.append("q", city);
   queryParams = queryParams.append('appid', '3a3eb62e70b9745f96cb7c04245a9cb8')
    return this.http.get<any[]>("https://api.openweathermap.org/data/2.5/weather",{params:queryParams})
// return this.http.get<any[]>(`http://api.openweathermap.org/data/2.5/weather?q=${loName}&appid=3a3eb62e70b9745f96cb7c04245a9cb8`)
  }

  serchNews(data: any){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('country', 'in');
    queryParams = queryParams.append('category', data);
    queryParams = queryParams.append('apikey', '408b4153b994422d8638da72f2d3ac5b');
    return this.http.get<string>('https://newsapi.org/v2/top-headlines', {params: queryParams})

    // return this.http.get<string>(`https://newsapi.org/v2/top-headlines?country=in&category=${data}&apiKey=4825482eb5324e4384652275485531f9`)
  }
}
