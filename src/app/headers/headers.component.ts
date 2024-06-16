import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {

  constructor(public httpServ: HttpService,private route : Router, public toast: ToastrService){}
  logoutUser(){
    localStorage.removeItem('userName')
    this.route.navigateByUrl('/login');
    this.toast.success('LogOut Successfully');
  }
}
