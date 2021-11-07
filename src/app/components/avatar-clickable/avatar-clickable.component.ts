import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges, 
  Output, 
  EventEmitter,
  AfterContentInit
} from '@angular/core';
import { createAvatar, Options } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import { Avataar } from 'src/app/interfaces/AvatarInterface';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-avatar-clickable',
  templateUrl: './avatar-clickable.component.html',
  styleUrls: ['./avatar-clickable.component.scss']
})
export class AvatarClickableComponent implements OnInit, OnChanges, AfterContentInit {

  public svg :string = "";
  public svg$ !:Observable<any> | Subscription;
  styleOptions :Partial<Options & style.Options> | undefined = {};


  @Input() public part !: "mouth" | "eyebrows" | "hair" | "eyes" | "nose" | "ears" | "shirt" | "earrings" | "glasses" | "facialHair" ;
  @Input() public option !:string;
  @Input() public username :string = ""
  @Output() public handleClick = new EventEmitter<Avataar>();

  constructor(
    private store :Store
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() :void {
    let tempObj : any= {
      seed : this.username
    }
    tempObj[this.part] = [this.option]
    this.styleOptions = tempObj;
    this.svg = createAvatar(style, this.styleOptions)
  }

  ngAfterContentInit() :void {
    this.svg$ = this.store.select('avatar').subscribe((data) => {
        if(typeof data == 'object'){
          this.svg = createAvatar(style, {...data, ...this.styleOptions});
        }
      },
      (error) => console.log(error)
    );
  }

  emitChanges(){
    this.handleClick.emit({
      part : this.part,
      options : [this.option]
    });
  }
}
