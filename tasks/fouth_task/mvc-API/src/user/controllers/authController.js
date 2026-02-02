import LoginService from '../services/loginServices.js';
import { createUserDto } from '../../dto/create-user.dto.js';

class authController {
    async signin(req, res, next) {
        const { username, password, email } = createUserDto.parse(req.body);
        console.log("Controller: User sign in attempt...");
        res.json(await LoginService.signin(username, password, email));
        
        //validation
    }
    async signup(req, res, next) {
        const { username, password, email} = createUserDto.parse(req.body);
        console.log("Controller: User sign up attempt...");
        const result = await LoginService.signup(username, password, email);
        res.status(201).send({ message: result.message });    
    }
}

export default new authController();