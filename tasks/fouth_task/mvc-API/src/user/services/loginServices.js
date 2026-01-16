import hashFunction from '../../../database/repository/hash.js';
import UserRepository from '../../../database/repository/user.repository.js';
import jwt from 'jsonwebtoken';
import lodash from 'lodash';

const userCurrent = UserRepository;
class LoginService {
    async login(username, pass) {
        console.log("Service: Processing login...");
        const hashedPassword = hashFunction.hash(pass);
        
        const user = await userCurrent.checkUser(username, hashedPassword);
        
        if (!user) {
            return { success: false, message: 'Invalid credentials' };
        }

        const token = jwt.sign(
            lodash.omit(user, 'password'),
            process.env.JWT_SECRET,
            { expiresIn: '50s' }
        );

        return { accessToken: token};

    }
    async signup(name, pass) {  
        console.log("Service: Processing signup...");
        const hashedPassword = await hashFunction.hash(pass);
        const isExist = await createUser(name, hashedPassword);
        //const isExist = await checkUser('users', name);
        if (isExist) {

            return { success: false, message: 'User already exists' };
        }

        return { success: true, message: isExist??'Signup successful' };       
    }
}

export default new LoginService();