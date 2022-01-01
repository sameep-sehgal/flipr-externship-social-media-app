const nodemailer = require('nodemailer');
const { emailConfig } = require('../../../config/vars');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: emailConfig.username,
		pass: emailConfig.password,
	},
	secure: false, // upgrades later with STARTTLS -- change this based on the PORT
});

// verify connection configuration
transporter.verify((error) => {
	if (error) {
		console.log('error with email connection');
	}
});

exports.sendForgotPasswordEmail = async (user, newPassword) => {
	transporter.sendMail({
		from: emailConfig.username, 
		to: user.email, 
		subject:'Reset Password', 
		text: 'Your new password is ' + newPassword, 
	  }).then(info => {
		console.log({info});
	  }).catch(console.error);
};

exports.sendForgotPasswordOtp = async (user, otp) => {
	transporter.sendMail({
		from: emailConfig.username, 
		to: user.email, 
		subject:'Reset Password - OTP', 
		text: 'Your OTP to reset password is' + otp + '. The OTP is valid for 10 minutes only.', 
	  }).then(info => {
		console.log({info});
	  }).catch(console.error);
};

exports.sendEmailVerificationOtp = async (user, otp) => {
	transporter.sendMail({
		from: emailConfig.username, 
		to: user.email, 
		subject:'Email Verification - OTP', 
		text: 'Your OTP for email verification is ' + otp + '. The OTP is valid for 10 minutes only.', 
	  }).then(info => {
		console.log({info});
	  }).catch(console.error);
};

exports.sendTestEmail = async (user) => {
	transporter.sendMail({
		from: emailConfig.username, 
		to: user.email, 
		subject:'Test Email Subject', 
		text: 'Test Email Body', 
	  }).then(info => {
		console.log({info});
	  }).catch(console.error);
}