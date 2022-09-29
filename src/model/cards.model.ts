import { Document } from 'mongoose'
export interface CardDocument extends Document {
    cardNumber : string
    cvv: number
    expirationMonth: string
    expirationYear: string
    email: string
}
