import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { IFinancialCards } from "./props";

export const FinancialCards = ({
    financialAssets
}:IFinancialCards) => {
    return (
        <>
            <div className="cards-background">
                <div className="cards-layout">
                <div className="cards-name">{"Financial Assets"}</div>
                <div className="financial-layout">
                    {
                    financialAssets?.map((financialAsset) => (
                        <div key={uuidv4()} className="financial-cards">
                        <div className="financial-info">
                            {`Ticker: ${financialAsset.ticker}`}
                        </div>
                        <div className="financial-info">
                            {`Shares: ${financialAsset.numberOfShares.toLocaleString()}`}
                        </div>
                        </div>
                    ))
                    }
                </div>
                </div>
            </div>
            <style jsx>
                {
                `
                    .cards-background {
                        @apply bg-[#111d24];
                    }
                    .cards-layout {
                        @apply p-4 pt-10
                    }
                    .cards-name {
                        @apply font-bold pt-4 text-2xl pb-2
                    }
                    .financial-layout {
                        @apply grid mt-5 md:grid-cols-4 gap-x-1 gap-y-3 justify-center mb-5;
                    }
                    .financial-cards {
                        @apply w-40 h-24 border border-[#6d767e] rounded-lg;
                    }
                    .financial-info {
                        @apply pt-1 pl-1 text-sm text-[#6d767e] font-semibold
                    }
                `
                }
            </style>
        </>
    );
}