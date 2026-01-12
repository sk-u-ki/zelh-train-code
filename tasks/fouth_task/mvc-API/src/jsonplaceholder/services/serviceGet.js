import Database from '../../../database/index.js';

class DataLoader {
    loadData(res, id = "*") {
        console.log("Getting data from database...");
        return Database.get(res, id);
    }
}

export default new DataLoader();    