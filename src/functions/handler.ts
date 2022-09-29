'use strict';
import { CardService } from '../service/card.service'
import {connectToDatabase} from "../db";

export const create = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        let service = new CardService();

        // if(validateAuth(JSON.parse(event.body))){
        //     callback(null, {
        //         statusCode: 400,
        //         body: JSON.stringify("Invalid Input parameter")
        //     })
        // }
        const card = service.save(event);

        callback(null, {
            statusCode: 200,
            body: JSON.stringify(card)
        });
    } catch(err) {
        callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not create card.'
        })
    }
};


export const getOne = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();
    try {
        console.log('function getOne');
        let service = new CardService();
        const card =  await service.getCard(event.pathParameters.id);
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(card)
        })
    } catch(err) {
        callback(null, {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not fetch the card.'
        })
    }
};
