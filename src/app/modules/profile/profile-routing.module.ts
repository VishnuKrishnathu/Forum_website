import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from 'src/app/pages/profile-page/profile-page.component';
import { StyleavatarPageComponent } from 'src/app/pages/styleavatar-page/styleavatar-page.component';

const routes: Routes = [
  { path: '', component : ProfilePageComponent },
  { path: 'style-avatar', component: StyleavatarPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
