import handlebars from 'handlebars'
import fs from 'fs'
import path from 'path'
import { createTransport } from '../../utils/email.js'
import { updateUuidPassword } from '../../../database/repository/user.repository.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function sendTemplateEmail(userData, htmlTemplate = 'example.email.handlebars') {
    const filePath = path.join(__dirname, "..", "..","utils", 'html.templates', htmlTemplate);
    const source = fs.readFileSync(filePath, 'utf-8');
    const template = handlebars.compile(source);

    const transporter = createTransport()
    const htmlToSend = template({
        urlRecovery: userData.urlRecovery,
    });
    const mailOptions = {
        from: `"My APP" <${process.env.GOOGLE_EMAIL_USER}>`,
        to: userData.email,
        subject: 'Востановление пароля',
        html: htmlToSend 
    };
    updateUuidPassword(userData)

    return transporter.sendMail(mailOptions);
}