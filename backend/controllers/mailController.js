import mailer from 'nodemailer';
import { Hello } from '../middleware/helloTemplate.js'
import dotenv from 'dotenv';

dotenv.config()


const getEmailData = (to, name, template,content) => {
    let data = null;
    switch (template) {
        case 'hello':
            data = {
                from: 'Alex Sh <alexsh1412@yahoo.com>',
                to: 'alexsh1412@gmail.com',
                subject: "Hello from shvetsov tours",
                html: Hello(content)
            }
            break
        default:
            data
    }
    return data
}

const sendEmail = (to, name, type, content) => {

    const smtpTransport = mailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        service:'yahoo',
        secure: false,
        auth: {
           user: process.env.MAIL_USER,
           pass: process.env.MAIL_PASS
        },
        debug: false,
        logger: true 
})
console.log(process.env.MAIL_USER);
console.log(process.env.MAIL_PASS);
    const mail = getEmailData(to, name, type,content)

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
        } 
        smtpTransport.close()
    })
}

export {
    sendEmail
}