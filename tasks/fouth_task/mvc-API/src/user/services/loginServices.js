import hashFunction from '../../utils/hash.js';
import {checkUser, createUser} from '../../../database/repository/user.repository.js';
import lodash from 'lodash';
import {generateToken} from '../../utils/jwt.js';

class LoginService {
    async signin(username, pass, email) {
        console.log("Service: Processing login...");
        const hashedPassword = hashFunction.hash(pass);
        const user = await checkUser(email, hashedPassword);
        
        if (!user) {
            return { success: false, message: 'Invalid credentials' };
        }
        const accessToken = generateToken({data: lodash.omit(user, 'password')});
        const refreshToken = generateToken({data: lodash.omit(user, 'password'), expTime:'7d'});

        return { accessToken, refreshToken };
    }
    async signup(name, pass, email) {  
        console.log("Service: Processing signup...");
        const hashedPassword = hashFunction.hash(pass);
        const isNotExist = await createUser(name, hashedPassword, email);
        if (isNotExist) {
            return { success: true, message: isNotExist??'Signup successful' };       
        }
        return { success: false, message: 'User already exists' };
    }
}

export default new LoginService();