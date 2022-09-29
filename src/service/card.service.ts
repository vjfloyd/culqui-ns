import  { CardRepository } from "../repository/cardRepository";
import {connectToDatabase} from "../db";
import { Card } from '../db/schema/Card';
import { CardDocument } from '../model/cards.model'
import  { generateToken }  from '../utils/tokenGenerator';

export class CardService {

    public async save(card: any) {
        console.log('CardService -> save')
        console.log("Token2=>" , generateToken(16));

        await connectToDatabase();
        await Card.create(JSON.parse(card.body))
    }

}
