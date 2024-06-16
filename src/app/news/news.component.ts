import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{

  newsData: any[] = [];

  isLoading = true;
  loader = false;

  constructor(public httpServ: HttpService){}

ngOnInit(): void {

}
getNews(event: any){
  this.loader = true;
  this.httpServ.serchNews(event.target.value).subscribe({
    next: (data: any) =>{
    this.isLoading = false;
    this.newsData = data.articles;
    this.loader = false;
    }, error: (error: any) =>{
      this.loader = false;
    }
  })
}

}
