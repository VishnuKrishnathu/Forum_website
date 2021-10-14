import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AskQuestionComponent } from './pages/ask-question/ask-question.component';
import { AuthGuard } from './guards/auth.guard';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path : 'signup', component: SignupPageComponent },
  { path : 'login', component: LoginPageComponent},
  { 
    path : 'ask-question',
    component: AskQuestionComponent,
    canActivate: [ AuthGuard ]
  },
  { 
    path : '', 
    component: HomePageComponent, 
    canActivate: [ AuthGuard ]
  },
  {
    path : '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
