import lodash from 'lodash';
import { updateUser, getUserById, getUserByRecoveryId } from '../../../database/repository/user.repository.js';
import hashFunction from '../../utils/hash.js';
import { sendTemplateEmail } from './emailServices.js'
import { v4 as uuidv4 } from 'uuid';


class AccountService {
    async profileData(userId) {
        console.log("Service: Fetching user profile...");

        return lodash.omit(await getUserById(userId), 'password');
    }
    async updateProfile(userId, updateData) {
        console.log("Service: Updating user profile...");

        return await updateUser(userId, updateData);
    }
    async emailResetPassword(userData) {
        userData.recoveryId = uuidv4()
        userData.urlRecovery = `http://127.0.0.1:3000/api/reset-password/recovery/${userData.recoveryId}`
        
        return await sendTemplateEmail(userData)
    }
    async recoveryPassword(dataRecovery) {
        const {id} = await getUserByRecoveryId(dataRecovery.recoveryId)
        const password = hashFunction.hash(dataRecovery.newPassword);
        return await updateUser(id, {password})
    }
}

export default new AccountService();