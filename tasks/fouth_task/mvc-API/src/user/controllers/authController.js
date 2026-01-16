import LoginService from '../services/loginServices.js';

class authController {
    async login(req, res, next) {
        const { username, password } = req.body;
        console.log("Controller: User login attempt...");

        if (typeof username === 'string' && typeof password === 'string') {
            res.json(await LoginService.login(username, password));
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    }
    async signup(req, res, next) {
        const { username, password } = req.body;
        console.log("Controller: User signup attempt...");
        if (typeof username === 'string' && typeof password === 'string') {
            const result = await LoginService.signup(username, password);
            res.status(201).send({ message: result.message });
        } else {
            res.status(400).send({ message: 'Invalid data provided' });
        }
    }
}

export default new authController();