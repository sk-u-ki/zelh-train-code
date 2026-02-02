import { database } from '../index.js';

class UserRepository {
    async createUser(username, password, email) {
        const res = database.transaction(async trx => {
            const [user] = await trx('users')
                                        .select('*')
                                        .where("email", email);
            if (!user) {
                return await trx('users').insert({ username, password, email });
            }           
            return null;
        });

        return res;
    }
    async updateUser(id, updateData) {
        updateData.timeUpdate = new Date();
        return await database('users')
            .where({ id })
            .update(updateData);
    }
    async checkUser(email, password) {
        return await database('users')
            .select('*')
            .where({"email": email, "password": password})
            .first();
    }
    async getUserById(id) {
        return await database('users')
            .select('*')
            .where({ id })
            .first();
    }
    async getUserByRecoveryId(recoveryId){
        return await database('users')
            .select('*')
            .where({ recoveryId })
            .first();
    }
    async updateUuidPassword(dataToUpdate){
        return await database('users')
            .where({ email: dataToUpdate.email })
            .update({recoveryId: dataToUpdate.recoveryId});
    }

}

const userRepository = new UserRepository();

export const checkUser = userRepository.checkUser.bind(userRepository);
export const createUser = userRepository.createUser.bind(userRepository);
export const updateUser = userRepository.updateUser.bind(userRepository);
export const getUserById = userRepository.getUserById.bind(userRepository);
export const getUserByRecoveryId = userRepository.getUserByRecoveryId.bind(userRepository);
export const updateUuidPassword = userRepository.updateUuidPassword.bind(userRepository);