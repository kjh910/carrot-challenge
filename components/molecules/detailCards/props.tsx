import { IImage } from "../../atom/image/props";

export interface IDetailCards extends IImage {
    name:string;
    netWorth:string;
    country:string;
    industries:string[];
    bio:string;
}