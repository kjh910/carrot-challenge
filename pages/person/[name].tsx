import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { convertUnit } from "../../libs/clients/utils/convertUnit";


export default function Name() {
  const router = useRouter();
  const name = router.query.name;
  const [person, setPerson] = useState<any>();

  useEffect(() => {
    if(name !== undefined){
      axios.get(`/api/billions/${name}`).then((res:AxiosResponse) => {
        setPerson(res.data);
      });
    }
  },[name]);

  return (
    <>
      <div className="layout">
        <div className="inside">
          <div className="cards-background">
            <div className="cards-layout">
              <Image src={person?.squareImage && person?.squareImage !== "https:undefined" ? person?.squareImage : "/404.svg"} alt={"test"} width={400} height={400} />
              <div className="cards-name">{person?.name}</div>
              <div className="cards-info">{`Networth: ${convertUnit(person?.netWorth)}`}</div>
              <div className="cards-info">{`Country: ${person?.country}`}</div>
              <div className="cards-info">{`Industry: ${
                person?.industries.map((industry:string) => (
                  industry
                ))
              }`}</div>
              <div className="cards-info">{`${person?.bio}`}</div>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="cards-background">
            <div className="cards-layout">
              <div className="cards-name">{"Financial Assets"}</div>
              <div className="financial-layout">
                {
                  person?.financialAssets.map((financialAsset:any) => (
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
        </div>
      </div>
      <style jsx>
        {
          `
            .layout {
              @apply p-4 w-full min-h-screen text-white bg-[#0f181c];
            }
            .inside {
              @apply mr-96 ml-96 mt-10 mb-10;
            }
            .cards-background {
              @apply bg-[#111d24];
            }
            .cards-layout {
              @apply p-4 pt-10
            }
            .cards-name {
              @apply font-bold pt-4 text-2xl pb-2
            }
            .cards-info {
              @apply pt-1 text-sm text-[#6d767e]
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
