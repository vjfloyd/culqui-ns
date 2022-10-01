import { BaseRepository } from './baseRepository'
import {ICard} from '../domain/models/ICard'
import CardSchema from '../db/schema/Card'

export class CardRepository extends BaseRepository<ICard> {

    constructor() {
        super(CardSchema)
    }


}
