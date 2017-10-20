const nodemailer = require('nodemailer');
const emailCredentials =  require('./../../email.credentials.json');


const transporter = nodemailer.createTransport({
    service: "Gmail",
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

function sendMail(nameFrom, emailFrom, messageFrom, mailTo, successCb, errorCb) {

    const mail = {
        from: `"${nameFrom}" <${emailFrom}>`,
        to: Array.isArray(mailTo) ? mailTo.join(', ') : mailTo,
        subject: `Message from Official Korte's website`,
        text: messageFrom,
    };

    transporter.sendMail(mail, (error, success) => {
        if (error) {
            errorCb();
            return;
        }
        successCb();
    })
};

module.exports = {
    sendMail
}