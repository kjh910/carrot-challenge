
export interface IBillions {
    id: string;
    name: string;
    squareImage: string;
    netWorth: number;
    industries: string[];
}

export interface IBillionsTemplete {
    billions: IBillions[];
}