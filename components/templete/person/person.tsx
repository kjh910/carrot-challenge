import React from "react";
import { convertUnit } from "../../../libs/clients/utils/convertUnit";
import { DetailCards } from "../../molecules/detailCards/detailCards";
import { FinancialCards } from "../../molecules/financialCards/financialCards";
import Layout from "../layout/layout";
import { IPersonTemplete } from "./props";


export default function PersonTemplete({
    person
}:IPersonTemplete) {

  return (
    <>
      <Layout>
        <div className="inside">
            <DetailCards 
                src={person?.squareImage && person?.squareImage !== "https:undefined" ? person?.squareImage : "/404.svg"}
                alt={"test"}
                width={400}
                height={400}
                name={person?.name}
                netWorth={convertUnit(person?.netWorth)}
                country={person?.country}
                industries={person?.industries}
                bio={person?.bio}
            />
        </div>
        <div className="inside">
            <FinancialCards
                financialAssets={person?.financialAssets}
            />
        </div>
      </Layout>
      <style jsx>
        {
          `
            .inside {
              @apply mr-96 ml-96 mt-10 mb-10;
            }
          `
        }
      </style>
    </>
  );
}
