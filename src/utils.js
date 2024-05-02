import { nanoid } from "nanoid";

export function createDonation(amount, comment = "") {
    return {
        id: nanoid(),
        amount: amount,
        comment: comment
    };
}
