const nodemailer = require('nodemailer');
const emailCredentials = require('./../../common/credentials.constant').email;


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

function sendMail(nameFrom, emailFrom, messageFrom, mailTo, successCb, errorCb) {

    const mail = {
        from: `"${nameFrom}" <${emailFrom}>`,
        to: Array.isArray(mailTo) ? mailTo.join(', ') : mailTo,
        subject: `Message from Korte's Official  Website`,
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