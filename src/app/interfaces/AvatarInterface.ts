import * as style from "@dicebear/micah";

export interface Avataar {
    part : "mouth" | "eyebrows" | "hair" | "eyes" | "nose" | "ears" | "shirt" | "earrings" | "glasses" | "facialHair" 
    options : Array<string>;
}

export interface AvatarStyle {
    seed : string;
    mouth : Array<string>;
    eyebrows :Array<string>;
    hair :Array<string>;
    eyes :Array<string>;
    nose :Array<string>;
    ears :Array<string>;
    shirt :Array<string>;
    earrings :Array<string>;
    glasses :Array<string>;
    facialHair :Array<string>;
}