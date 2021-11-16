import { Component, OnInit, Input, OnChanges, AfterContentInit, DoCheck, Output, EventEmitter } from '@angular/core';
import { createAvatar, Options } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-avatar-circle',
  templateUrl: './avatar-circle.component.html',
  styleUrls: ['./avatar-circle.component.scss']
})
export class AvatarCircleComponent implements OnInit, OnChanges, AfterContentInit, DoCheck {

  // Inputs
  @Input() public part :string= "";
  @Input() public option :string | undefined = "";
  @Input() public username :string = "";

  //Outputs
  @Output() svgObj = new EventEmitter<Partial<style.Options & Options>>();

  public svg :string = "";
  public svgDup :string = "";
  public updateAble :boolean = false;
  public svg$ !:Observable<any> | Subscription;
  public styleOptions !: Partial<style.Options & Options> | undefined;

  constructor(
    private store :Store<{ avatar :Partial<style.Options & Options> | undefined }>
  ) {}

  ngOnInit(): void {}

  ngOnChanges() :void {
    let tempObj : Partial<style.Options & Options> | undefined= {
      seed : this.username,
    }
    this.styleOptions = tempObj;
    this.svg = createAvatar(style, tempObj)
  }

  ngAfterContentInit() :void {
    this.svg$ = this.store.select('avatar').subscribe((data) => {
      this.styleOptions = {...this.styleOptions, ...data};
      this.svg = createAvatar(style, this.styleOptions);
    }, (error) => console.log(error));
  }

  ngDoCheck() :void {
    if(this.svgDup !== this.svg) {
      this.svgDup = this.svg;
      this.svgObj.emit(this.styleOptions);
    }
  }

}
