import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { convertUnit } from "../../../libs/clients/utils/convertUnit";
import { CardsLink } from "../../organisms/cardsLink/cardsList";
import Layout from "../layout/layout";

import { IBillionsTemplete } from "./props";

export default function BillionTemplete({
  billions
}:IBillionsTemplete) {

  return (
    <>
      <Layout>
        <div className="inside">
          {
            Object.keys(billions).map((key:string) => (
              <CardsLink
                key={uuidv4()}
                href={`person/${billions?.[Number(key)]?.id}`}
                src={billions?.[Number(key)]?.squareImage && billions?.[Number(key)]?.squareImage !== "https:undefined" ? billions?.[Number(key)]?.squareImage : "/404.svg"}
                alt={"Picture of the author"}
                width={400}
                height={400}
                name={billions?.[Number(key)]?.name}
                netWorth={convertUnit(billions?.[Number(key)]?.netWorth)}
                industries={billions?.[Number(key)]?.industries}
              />
            ))
          }
        </div>
      </Layout>
      <style jsx>
        {
          `
            .inside {
              @apply grid mr-32 ml-32 md:grid-cols-4 gap-x-5 gap-y-10 mt-10 mb-10;
            }
          `
        }
      </style>
    </>
  );
}
