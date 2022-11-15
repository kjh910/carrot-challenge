import Link from "next/link";
import { ICardsLink } from "./props";
import { Cards } from "../../molecules/cards/cards";

export const CardsLink = ({
    href,
    src,
    alt,
    width,
    height,
    name,
    netWorth,
    industries
}:ICardsLink) => {
    return (
        <Link href={href}>
            <Cards 
                src={src}
                alt={alt}
                height={height}
                width={width}
                name={name}
                industries={industries}
                netWorth={netWorth}
            />
        </Link>
    );
}