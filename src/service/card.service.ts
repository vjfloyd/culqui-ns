import {connectToDatabase} from "../db";
import {Card} from '../db/schema/Card';
import {CardDocument} from '../model/cards.model'
import {generateToken} from '../utils/tokenGenerator';
import {CardDto} from '../dto/CardDto'
import {ICard} from "../domain/models/ICard";

export class CardService {


    public async save(card: any) {
        console.log('CardService -> save')
        console.log("Token2=>" , generateToken(16));
        await connectToDatabase();
        let cardDocument : CardDocument = JSON.parse(card.body);
        cardDocument.token = generateToken(16);
        await Card.create(cardDocument);
    }

    public async getCard(tokenvar: string) {
        await connectToDatabase();
        console.log('token-->', tokenvar)
        const card  = await Card.findOne({ token: tokenvar});
        return card;

    }

}
