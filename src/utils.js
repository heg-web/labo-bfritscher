export function toChf(value) {
    if (typeof value === "number") {
        return `${value.toFixed(2)} CHF`;
    }
    return `${value || 0} CHF`;
}
