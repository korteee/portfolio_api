const nodemailer = require('nodemailer');
const emailCredentials = require('./../../constants/credentials.constant').email;
const emailData = require('./../../constants/email.constant');


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: emailCredentials.username,
        pass: emailCredentials.password
    }
});

transporter.verify((err, succ) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Server ready");
    }
});

function sendMail(nameFrom, emailFrom, messageFrom, mailTo) {

    const mail = {
        from: `"${nameFrom}" <${emailFrom}>`,
        to: Array.isArray(mailTo) ? mailTo.join(', ') : mailTo,
        subject: emailData.title,
        text: messageFrom,
    };

    return transporter.sendMail(mail)
};

function contactFormSubmit(nameFrom, emailFrom, messageFrom, successCb, errorCb) {

    sendMail(nameFrom, emailFrom, messageFrom, emailData.address)
        .then(
            sendMail(emailData.name, emailData.address, emailData.messages.confirm, emailFrom).then(successCb, errorCb),
            errorCb
        )

};

module.exports = {
    sendMail,
    contactFormSubmit
};