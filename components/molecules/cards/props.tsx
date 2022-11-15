import { IImage } from "../../atom/image/props";

export interface ICards extends IImage {
    name:string;
    netWorth:string;
    industries:string[];
}