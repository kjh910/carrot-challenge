export interface IFinancialAssets {
    exchange:string;
    ticker:string;
    companyName:string;
    numberOfShares:number;
    sharePrice:number;
    currencyCode:string;
    exchangeRate:number;
    interactive:boolean;
    currentPrice:number;
}

export interface IFinancialCards {
    financialAssets:IFinancialAssets[];
}