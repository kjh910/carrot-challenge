import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { ImageComponent } from "../../atom/image/images";
import { ICards } from "./props";

export const Cards = ({
    src,
    alt,
    width,
    height,
    name,
    netWorth,
    industries
}:ICards) => {
    return (
        <>
            <div  className="cards-background">
                {
                    (
                    <React.Fragment>
                        <ImageComponent src={src} alt={alt} width={width} height={height} />
                        <div className="cards-layout">
                            <div className="cards-name">{name}</div>
                            <div className="cards-industries">
                            <span key={uuidv4()}>{netWorth}
                                {industries?.map((industry:string) => (
                                " / " + industry
                                ))}
                            </span>
                            </div>
                        </div>
                    </React.Fragment>
                    )
                } 
            </div>
            <style jsx>
                {
                `
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