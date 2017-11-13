const nodemailer = require('nodemailer');
const emailCredentials = require('./../../../constants/credentials.constant').email;
const emailData = require('./../../../constants/email.constant');

const mailController = {
	sendMail,
	contactFormSubmit
};

const transporter = nodemailer.createTransport("SMTP", {
	service: "Gmail",
	port: 465,
	secure: true,
	auth: {
		user: emailCredentials.username,
		clientId: emailCredentials.clientId,
		clientSecret: emailCredentials.clientSecret,
		refreshToken: emailCredentials.refreshToken
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

module.exports = mailController;
