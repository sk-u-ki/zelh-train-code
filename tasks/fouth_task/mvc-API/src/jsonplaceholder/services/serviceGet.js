import getData from '../../../database/repository/get.js';

class DataLoader {
    loadData(res, id = "*") {
        console.log("Getting data from database...");
        return getData(res, id);
    }
}

export default new DataLoader();    