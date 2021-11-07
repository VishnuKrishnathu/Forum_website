import { Component, OnInit, Input, OnChanges, AfterContentInit } from '@angular/core';
import { createAvatar, Options } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-avatar-circle',
  templateUrl: './avatar-circle.component.html',
  styleUrls: ['./avatar-circle.component.scss']
})
export class AvatarCircleComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() public part :string= "";
  @Input() public option :string | undefined = "";
  @Input() public username :string = "";

  public svg :string = "";
  public updateAble :boolean = false;
  public svg$ !:Observable<any> | Subscription;

  constructor(
    private store :Store
  ) { }

  ngOnInit(): void {}

  ngOnChanges() :void {
    let styleOptions : Partial<style.Options & Options> | undefined= {
      seed : this.username,
    }
    this.svg = createAvatar(style, styleOptions)
  }

  ngAfterContentInit() :void {
    this.svg$ = this.store.select('avatar').subscribe((data) => {
      console.log(typeof data);
      if(typeof data == 'object'){
        let tempObj = { ...data};
        this.svg = createAvatar(style, tempObj);
      }
    }, (error) => console.log(error));
  }

}
