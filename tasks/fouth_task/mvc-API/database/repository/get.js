import { database } from '../index.js';


export default function getData(db = null,id="*") {
    return database(db)
            .select()
            .where(id==="*" ? {} : { id });
}