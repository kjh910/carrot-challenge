import { IFinancialCards } from "../../molecules/financialCards/props";

export interface IPerson extends IFinancialCards {
    id: string;
    state:string;
    city:string;
    name: string;
    country:string;
    position:number;
    squareImage: string;
    netWorth: number;
    industries: string[];
    thumbnail:string;
    bio:string;
    about:string;
}

export interface IPersonTemplete {
    person:IPerson
}