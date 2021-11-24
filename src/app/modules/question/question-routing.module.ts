import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPageComponent } from 'src/app/pages/dynamic/question-page/question-page.component';

const routes: Routes = [
  { path: ':id', component : QuestionPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
