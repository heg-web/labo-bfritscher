export function toCHF(amount) {
    if (isNaN(Number(amount))) {
        return "0.00 CHF";
    }
    return `${amount.toFixed(2)} CHF`;
}
