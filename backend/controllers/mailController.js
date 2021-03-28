import mailer from 'nodemailer';
import { Hello } from '../middleware/helloTemplate.js'

const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
        case 'hello':
            data = {
                from: 'Alex Sh <alexsh1412@yahoo.com>',
                to: 'alexsh1412@gmail.com',
                subject: "Hello from shvetsov tours",
                html: Hello()
            }
            break
        default:
            data
    }
    return data
}

const sendEmail = (to, name, type) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        service:'yahoo',
        secure: false,
        auth: {
           user: 'alexsh1412@yahoo.com',
           pass: 'dlfommyehcikgycn'
        },
        debug: false,
        logger: true 
})

    const mail = getEmailData(to, name, type)
    console.log(mail);

    smtpTransport.sendMail(mail, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log('sent eamil');
            response.status(201).json({ message: 'mail sent' })
        }
        smtpTransport.close()
    })
}

export {
    sendEmail
}