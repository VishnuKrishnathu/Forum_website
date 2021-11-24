import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AskQuestionComponent } from './pages/ask-question/ask-question.component';
import { QuestionBoxComponent } from './components/question-box/question-box.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { UserEffects } from 'src/store/effects/user.effect';
import { AvatarEffect } from 'src/store/effects/avatar.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/store/reducers/user.reducer';
import { avatarReducer } from 'src/store/reducers/avatar.reducer';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { StyleavatarPageComponent } from './pages/styleavatar-page/styleavatar-page.component';
import { AvatarCircleComponent } from './components/avatar-circle/avatar-circle.component';
import { AvatarClickableComponent } from './components/avatar-clickable/avatar-clickable.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { QuestionPageComponent } from './pages/dynamic/question-page/question-page.component';
import { UserCommentComponent } from './components/user-comment/user-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    SignupPageComponent,
    HomePageComponent,
    LoginPageComponent,
    QuestionBoxComponent,
    AskQuestionComponent,
    PagenotfoundComponent,
    ProfilePageComponent,
    DomSanitizerPipe,
    StyleavatarPageComponent,
    AvatarCircleComponent,
    AvatarClickableComponent,
    ColorPickerComponent,
    QuestionPageComponent,
    UserCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([UserEffects, AvatarEffect]),
    StoreModule.forRoot({user : userReducer, avatar : avatarReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
