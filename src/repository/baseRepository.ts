import { Connection, Model, Document, Query, Types } from 'mongoose'
import MongoDatabase from '../db/conection'

export abstract class BaseRepository<T extends Document> {

    private _database: MongoDatabase
    private _model: Model<Document>

    constructor(schemaModel: Model<Document>) {
        this._database = MongoDatabase.Instance
        this._model = schemaModel
    }

    public create(item: T[]): Promise<Document> {
        return this._model.create(item)
    }

    public retrieve(): Promise<Document[]> {
        return this._model.find({}).exec()
    }

    // public update(_id: string, item: T): Promise<Query<any>> {
    //     return this._model.update({ _id }, item).exec()
    // }

    public delete(_id: string): Promise<Document> {
        return this._model.remove({ _id }).exec()
    }

    public findById(_id: string): Promise<Document|null> {
        return this._model.findById(_id).exec()
    }

    // private toObjectId(_id: string): Types.ObjectId {
    //     return Types.ObjectId.createFromHexString(_id)
    // }

}
