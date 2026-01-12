import fs from 'fs';
import Database from '../../../database/index.js';

class DataLoader {
    async collectData(url, type) {
        console.log("Collecting data from API...");
        const response = await fetch(url);
        const data = await response.json();
        this.loadData(data, type);
    }

    loadData(res, type) {
        console.log("Saving data to database...");
        Database.put(type, res);
    }
}

export default new DataLoader();    