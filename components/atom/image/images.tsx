import Image from "next/image";
import { IImage } from "./props";

export const ImageComponent = ({
    src,
    alt,
    width,
    height
}:IImage) => {
    return (
        <Image src={src} alt={alt} width={width} height={height} />
    );
}