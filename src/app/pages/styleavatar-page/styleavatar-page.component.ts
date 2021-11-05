import { Component, OnInit } from '@angular/core';
import { Avataar } from 'src/app/interfaces/AvatarInterface';

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

  public username :string = "Pratham"

  constructor() { }

  ngOnInit(): void {}

  changeAvatar(value :any){
    console.log(value)
  }

}
