import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { convertUnit } from "../libs/clients/utils/convertUnit";

export default function Home() {
  const [billions, setBillions] = useState<any[]>([]);

  useEffect(() => {
    axios.get("api/billions").then((res:AxiosResponse) => {
      setBillions(res.data);
    });
  },[]);

  return (
    <>
      <div className="layout">
        <div className="inside">
          {
            Object.keys(billions).map((key:string) => (
              <Link key={uuidv4()} href={`person/${billions?.[Number(key)]?.id}`}>
                <div  className="cards-background">
                    {
                      (
                        <React.Fragment>
                            <Image src={billions?.[Number(key)]?.squareImage && billions?.[Number(key)]?.squareImage !== "https:undefined" ? billions?.[Number(key)]?.squareImage : "/404.svg"} alt="Picture of the author" width={400} height={400} />
                            <div className="cards-layout">
                              <div className="cards-name">{billions?.[Number(key)]?.name}</div>
                              <div className="cards-industries">
                                <span key={uuidv4()}>{convertUnit(billions?.[Number(key)]?.netWorth)}
                                  {billions?.[Number(key)]?.industries?.map((industry:string) => (
                                    " / " + industry
                                  ))}
                                </span>
                              </div>
                            </div>
                        </React.Fragment>
                      )
                    } 
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <style jsx>
        {
          `
            .layout {
              @apply p-4 w-full min-h-screen text-white bg-[#0f181c];
            }
            .inside {
              @apply grid mr-32 ml-32 md:grid-cols-4 gap-x-5 gap-y-10 mt-10 mb-10;
            }
            .cards-background {
              @apply bg-[#111d24]  hover:-translate-y-1 hover:scale-105 duration-300;
            }
            .cards-layout {
              @apply p-2
            }
            .cards-name {
              @apply font-bold p-1
            }
            .cards-industries {
              @apply text-xs p-1
            }
          `
        }
      </style>
    </>
  );
}
