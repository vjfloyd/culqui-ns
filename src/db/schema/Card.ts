import { Schema, model } from 'mongoose';

const CardSchema = new Schema({
    cardNumber : String,
    cvv: String,
    expirationMonth: String,
    expirationYear: String,
    email: String
});

export const Card = model('Card', CardSchema);
