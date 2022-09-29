'use strict';
import { config } from 'dotenv';
// import { connectToDatabase } from './db';
// import { Card } from './db/schema/Card';
import { CardService } from './service/card.service'
// config({ path: './variables.env' });
import  { validateAuth }  from './utils/authValidator';

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

// export const getOne = async (event, context, callback) => {
//     context.callbackWaitsForEmptyEventLoop = false;
//
//     await connectToDatabase();
//     try {
//         const note = await Card.findById(event.pathParameters.id)
//         callback(null, {
//             statusCode: 200,
//             body: JSON.stringify(note)
//         })
//     } catch(err) {
//         callback(null, {
//             statusCode: err.statusCode || 500,
//             headers: { 'Content-Type': 'text/plain' },
//             body: 'Could not fetch the note.'
//         })
//     }
// };
