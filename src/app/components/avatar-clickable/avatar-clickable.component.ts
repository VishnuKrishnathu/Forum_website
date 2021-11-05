import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';

@Component({
  selector: 'app-avatar-clickable',
  templateUrl: './avatar-clickable.component.html',
  styleUrls: ['./avatar-clickable.component.scss']
})
export class AvatarClickableComponent implements OnInit, OnChanges {

  public svg :string = "";
  @Input() public part :string= "";
  @Input() public option :string | undefined = "";
  @Input() public username :string = ""
  @Output() public handleClick = new EventEmitter<{part :string; option :string | undefined}>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() :void {
    let styleOptions :any = {
      seed : this.username,
    }
    styleOptions[this.part] = [this.option];
    this.svg = createAvatar(style, styleOptions)
  }

  emitChanges(){
    this.handleClick.emit({
      part : this.part,
      option : this.option
    });
  }
}
