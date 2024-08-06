var email: string = 'dependrabasnet@gmail.com';

var aatposition: number = email.indexOf('@');
var ofposition: number = email.indexOf('.');

// Ensure the dot is after the @ symbol and not the last character
if (aatposition === -1 || ofposition === -1 || ofposition < aatposition + 1 || ofposition === email.length - 1) {
    console.log(`${email} is not valid`);
} else {
    console.log(`${email} is valid`);
}