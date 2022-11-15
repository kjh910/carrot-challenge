import React from "react";
import { ImageComponent } from "../../atom/image/images";
import { IDetailCards } from "./props";

export const DetailCards = ({
    src,
    alt,
    width,
    height,
    name,
    netWorth,
    country,
    industries,
    bio
}:IDetailCards) => {
    return (
        <>
            <div className="cards-background">
                <div className="cards-layout">
                <ImageComponent src={src} alt={alt} width={width} height={height} />
                <div className="cards-name">{name}</div>
                <div className="cards-info">{`Networth: ${netWorth}`}</div>
                <div className="cards-info">{`Country: ${country}`}</div>
                <div className="cards-info">{`Industry: ${
                    industries?.map((industry:string) => (
                        industry
                    ))
                }`}</div>
                <div className="cards-info">{`${bio}`}</div>
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
                    .cards-info {
                        @apply pt-1 text-sm text-[#6d767e]
                    }
                `
                }
            </style>
        </>
    );
}