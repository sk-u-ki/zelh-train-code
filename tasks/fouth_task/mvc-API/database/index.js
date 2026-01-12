import putData from './repository/put.js';
import getData from './repository/get.js';
class Database {
    constructor() {
        this.data = [];
    }
    put(db, data) {
        putData(db, data);
    }
    get(db, id="*") {
        return getData(db, id);
    }
}

export default new Database();