import { Component, OnInit, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Avataar } from 'src/app/interfaces/AvatarInterface';
import { Store } from '@ngrx/store';
import { updateAvatar } from 'src/store/actions/avatar.action';
import { Options } from '@dicebear/micah';

@Component({
  selector: 'app-styleavatar-page',
  templateUrl: './styleavatar-page.component.html',
  styleUrls: ['./styleavatar-page.component.scss']
})
export class StyleavatarPageComponent implements OnInit {

  public styleOptions : Array<Avataar>= [
    {
      part : "mouth",
      options : [  "surprised", "laughing", "nervous", "smile", "sad", "pucker", "frown", "smirk" ]
    },
    {
      part : "eyebrows",
      options : [  "up", "down", "eyelashesUp", "eyelashesDown"]
    },
    {
      part : "hair",
      options : [  "fonze", "mrT", "dougFunny", "mrClean", "dannyPhantom", "full", "turban", "pixie "]
    },
    {
      part : "eyes",
      options : [  "eyes", "round", "eyesShadow", "smiling "]
    },
    {
      part : "nose",
      options : [  "curve", "pointed", "tound "]
    },
    {
      part : "ears",
      options : [  "attached", "detached "]
    },
    {
      part : "shirt",
      options : [  "open", "crew", "collared "]
    },
    {
      part : "earrings",
      options : [  "hoop", "stud " ]
    },
    {
      part : "glasses",
      options : [  "round", "square"]
    },
    {
      part : "facialHair",
      options : [  "beard", "scruff"]
    }
  ]
  
  public username :string = "VishnuKrishnathu";

  avatar !: Observable<Options>;

  constructor(
    private store :Store<{avatar : Options}>
  ) { 
    this.avatar = this.store.select('avatar');
  }

  ngOnInit(): void {}

  changeAvatar(value : Avataar){
    console.log(value);
    this.store.dispatch(updateAvatar(value));
  }


  /**
   * An alternative for script tags in angular
   * TODO: Make a component and add the code as it is to the component
   */

  // @Input() src: string = "";

  // @Input() type: string = "";

  // @ViewChild('script') script !: ElementRef;

  // convertToScript() {
  //   var element = this.script.nativeElement;
  //   var script = document.createElement("script");
  //   script.type = this.type ? this.type : "text/javascript";
  //   if (this.src) {
  //       script.src = this.src;
  //   }
  //   if (element.innerHTML) {
  //       script.innerHTML = element.innerHTML;
  //   }
  //   var parent = element.parentElement;
  //   parent.parentElement.replaceChild(script, parent);
  // }

  // ngAfterViewInit() :void {
  //   this.convertToScript();
  // }

}