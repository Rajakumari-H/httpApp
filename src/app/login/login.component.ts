import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

  msg: string = '';

  constructor(public httpServ: HttpService, public route: Router, public toastr: ToastrService){}


  doLogin(form:NgForm){
      this.httpServ.getMethod().subscribe({
        next: (data: any[]) =>{
        
          let op = data.filter(val=> val.userName == form.value.userName && val.password == form.value.password);

          if(op.length > 0){
            localStorage.setItem('userName',form.value.userName)
            this.route.navigateByUrl('/home');
            this.toastr.success('Login Successfully');
          }else{
            //  this.msg = "Invalid username or password";
             form.reset();
             this.toastr.error('Invalid username or password')
          }

        }, error: (error: any) =>{
          console.log(error);
        }
      });
  }
}
