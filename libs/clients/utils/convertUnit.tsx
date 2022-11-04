export const convertUnit = (number:number) => {
    return `${Math.round(Math.round(number)/1000)} Billion`;
}