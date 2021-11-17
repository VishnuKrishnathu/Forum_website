import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Avataar } from 'src/app/interfaces/AvatarInterface';
import { Store } from '@ngrx/store';
import { updateAvatar } from 'src/store/actions/avatar.action';
import { AvatarService } from 'src/app/services/avatar.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import * as style from '@dicebear/micah';
import { Options } from '@dicebear/avatars';

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
  ];

  public colorPickerOptions :Array<{label : string ; part :"shirtColor" | "mouthColor" | "hairColor" | "glassesColor" | "facialHairColor" | "eyebrowColor" | "eyeShadowColor" | "earringColor" | "baseColor"}> = [
    {
      label : 'Face Color :',
      part : 'baseColor',
    },
    {
      label : 'Shirt Color :',
      part : 'shirtColor',
    },
    {
      label : 'Mouth Color :',
      part : 'mouthColor',
    },
    {
      label : 'Hair Color :',
      part : 'hairColor',
    },
    {
      label : 'Glasses Color :',
      part : 'glassesColor',
    },
    {
      label : 'Facial Hair Color :',
      part : 'facialHairColor',
    },
    {
      label : 'Eyebrow Color :',
      part : 'eyebrowColor',
    },
    {
      label : 'Eye Shadow Color :',
      part : 'eyeShadowColor',
    },
    {
      label : 'Earring Color :',
      part : 'earringColor',
    }
  ]
  
  public username :string = "VishnuKrishnathu";
  protected styleObj !: Partial<style.Options & Options>;

  avatar !: Observable<style.Options>;

  public baseColor : "baseColor"= "baseColor";

  constructor(
    private store :Store<{avatar : style.Options}>,
    private avatarService :AvatarService
  ) { 
    this.avatar = this.store.select('avatar');
  }

  ngOnInit(): void {}

  changeAvatar(value : Avataar){
    this.store.dispatch(updateAvatar(value));
  }

  saveAvatar(){
    let user_id = AuthenticationService.getterUser().id;
    console.log(user_id);
    if(user_id) this.avatarService.changeAvatar(this.styleObj, user_id).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
  }

  getSvgObj(styleObj :Partial<style.Options & Options>){
    this.styleObj = styleObj;
  }


}