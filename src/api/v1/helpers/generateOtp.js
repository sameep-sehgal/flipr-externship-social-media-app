const otpGenerator = require('otp-generator');

export default () => {
    return otpGenerator.generate(
        6, 
        { 
            upperCaseAlphabets: false, 
            specialChars: false ,
            lowerCaseAlphabets: false,
            digits: true
        }
    );
}