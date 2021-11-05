import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { createAvatar, StyleOptions } from '@dicebear/avatars';
import * as style from '@dicebear/micah';

@Component({
  selector: 'app-avatar-circle',
  templateUrl: './avatar-circle.component.html',
  styleUrls: ['./avatar-circle.component.scss']
})
export class AvatarCircleComponent implements OnInit, OnChanges {

  public svg :string = "";
  @Input() public part :string= "";
  @Input() public option :string | undefined = "";
  @Input() public username :string = "";

  private static styleOpt :Object= {}

  static getterStyle() :Object{
    return this.styleOpt;
  }

  static setterStyle(options :Object) :void{
    this.styleOpt = {
      ...this.styleOpt, ...options
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() :void {
    let styleOptions : any= {
      seed : this.username,
    }
    this.svg = createAvatar(style, styleOptions)
  }

}
