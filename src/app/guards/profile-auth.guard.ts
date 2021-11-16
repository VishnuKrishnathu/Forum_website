import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { IUserData } from 'src/app/interfaces/UserInterface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileAuthGuard implements CanActivate {

  protected activateRoute :boolean = true;

  constructor(private authservice :AuthenticationService, private router :Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!localStorage.getItem("token")) return false;
    this.authservice.getUser().subscribe((data :IUserData)=> {
      AuthenticationService.setterUser(data);
    },
    (error)=>{
      if(error.status == 401) this.router.navigate(['/login']);
      else console.log("different error");
    });
    return this.activateRoute;
  }
  
}
