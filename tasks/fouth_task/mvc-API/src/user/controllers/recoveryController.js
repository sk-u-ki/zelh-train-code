import AccountService from '../services/accountServices.js';
import { recoveryPasswordDto } from '../../dto/recovery-password.dto.js';
import { passwordDto } from '../../dto/password.dto.js'

class recoveryController {
    async emailResetPassword(req, res, next) {
        console.log("OK")
        const userData = recoveryPasswordDto.parse(req.body)
        res.json(await AccountService.emailResetPassword(userData))
    }
    async resetPassword(req, res, next) {
        console.log("Controller: Reset password...");
        const {recoveryId} = req.params
        const {newPassword} = passwordDto.parse(req.body)
        res.json(await AccountService.recoveryPassword({recoveryId, newPassword}))
    }
}

export default new recoveryController();