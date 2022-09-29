import {connectToDatabase} from "../db";
import {Card} from '../db/schema/Card';
import {CardDocument} from '../model/cards.model'
import {generateToken} from '../utils/tokenGenerator';

export class CardService {

    public async save(card: any) {
        console.log('CardService -> save')
        await connectToDatabase();
        let cardDocument : CardDocument = JSON.parse(card.body);
        cardDocument.token = generateToken(16);
        await Card.create(cardDocument);
    }

    public async getCard(token: string) {
        console.log('CardService -> getCard')
        await connectToDatabase();
        const card  = await Card.findOne({ token: token});
        const cardDto  =  {
            cardNumber: card.cardNumber,
            expirationMonth: card.expirationMonth,
            expirationYear: card.expirationYear,
            email: card.email
        }
        return cardDto;
    }

}
