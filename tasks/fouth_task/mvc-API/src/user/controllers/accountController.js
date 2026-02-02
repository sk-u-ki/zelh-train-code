import AccountService from '../services/accountServices.js';
import { updateProfileDto } from '../../dto/account.dto.js';

class AccountController {
    async getProfile(req, res, next) {
        console.log("Controller: Getting user profile...");
        const id = req.user.id;
        const profile = await AccountService.profileData(id);
        res.json(profile);
    }
    async updateProfile(req, res, next) {
        console.log("Controller: Updating user profile...");
        const id = req.user.id;
        const updateData = updateProfileDto.parse(req.body);
        console.log("Update Data:", updateData);
        const updatedProfile = await AccountService.updateProfile(id, updateData);
        res.json(updatedProfile);
    }
}

export default new AccountController();
