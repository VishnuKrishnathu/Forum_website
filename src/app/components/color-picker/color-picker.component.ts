import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Avataar } from 'src/app/interfaces/AvatarInterface';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  color :string = "";
  @Input() part !:"shirtColor" | "mouthColor" | "hairColor" | "glassesColor" | "facialHairColor" | "eyebrowColor" | "eyeShadowColor" | "earringColor" | "baseColor";
  @Output() update = new EventEmitter<Avataar>();

  constructor() { }

  ngOnInit(): void {
  }

  changeEvent(){
    this.update.emit({
      part : this.part,
      options : [this.color]
    })
  }
}
