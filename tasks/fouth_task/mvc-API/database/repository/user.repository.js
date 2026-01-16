import { database } from '../index.js';
import lodash from 'lodash';

class UserRepository {
    async createUser(name, password) {
        const res = database.transaction(async trx => {
            const [user] = await trx('users').select('*').where("username", name);
            if (!user) {

                return await trx('users').insert({ name, password});
            }

            return null;
        });

        return res;
    }
    async checkUser(name, password) {
        const user = await database('users')
                            .select('*')
                            .where({"username": name, "password": password})
                            .first();
                            
        return user;
    }

}
export default new UserRepository();