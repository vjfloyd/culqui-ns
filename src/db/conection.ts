/* istanbul ignore file */

import { connect, Connection } from 'mongoose'
import SimpleLogger from '../logger/logger'
import * as mongoose from "mongoose";

const config = require('config')
const logger = new SimpleLogger(`${__filename} connect()`)

// See API docs: http://mongoosejs.com/docs/lambda.html
let cacheDB: Connection

export default class MongoDatabase {

    private static _instance: MongoDatabase

    private constructor() {
        this.connect()
    }

    public static get Instance(): MongoDatabase {
        return this._instance || (this._instance = new this())
    }

    // private async connect() {
    //     let conn = null;
    //     if (conn == null) {
    //         conn = mongoose.connect("mongodb://127.0.0.1:27017/culquidb", {
    //             serverSelectionTimeoutMS: 10000
    //         }).then(() => mongoose);
    //
    //         // `await`ing connection after assigning to the `conn` variable
    //         // to avoid multiple function calls creating new connections
    //         await conn;
    //     }
    //     return conn;
    //
    // };


    private async connect(): Promise<Connection> {
        logger.startTimer()
        if (cacheDB && cacheDB.readyState === 1) {
            logger.debug('Reusing existing connection opened')
            logger.endTimer()
            return cacheDB
        } else {
            try {
                const options = {
                    promiseLibrary: global.Promise,
                    bufferCommands: false,
                    bufferMaxEntries: 0
                }
                // const uri = `mongodb://${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`

                const mongo = await connect("mongodb://localhost:27017/culquidb?directConnection=true")


                cacheDB = mongo.connection
                console.log('MONGO----->');
                logger.debug('Connected to MongoDB successfully', cacheDB)
                logger.endTimer()
                return cacheDB
            } catch (err) {
                logger.error('Could not connect to MongoDB', err)
                logger.endTimer()
                throw err
            }
        }
    }
}
