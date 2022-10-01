import { Promise, connect } from 'mongoose';

let isConnected;

export const connectToDatabase = () => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }

    console.log('=> using new database connection');
    return connect("mongodb://127.0.0.1:27017/culquidb")
        .then(db => {
            isConnected = db.connections[0].readyState;
        });
};
