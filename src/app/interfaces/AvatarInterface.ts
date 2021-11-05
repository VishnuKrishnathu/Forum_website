export interface Avataar {
    part : "mouth" | "eyebrows" | "hair" | "eyes" | "nose" | "ears" | "shirt" | "earrings" | "glasses" | "facialHair"
    options : Array<string | undefined>
}

export interface AvatarStyle {
    mouth : Array<string>;
    eyebrows :Array<string>
}