import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/interfaces/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authservice :AuthenticationService, private router :Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!localStorage.getItem("token")) return false;
      let usercheck = this.authservice.getUser().subscribe((data :IUserData)=> AuthenticationService.setterUser(data),
      (error)=>error.status == 401 ? this.router.navigate(['/login']) : null);
      return true;
  }
  
}
