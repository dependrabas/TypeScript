var email = 'dependrabasnet@gmail.com';
var aatposition = email.indexOf('@');
var ofposition = email.indexOf('.');
// Ensure the dot is after the @ symbol and not the last character
if (aatposition === -1 || ofposition === -1 || ofposition < aatposition + 1 || ofposition === email.length - 1) {
    console.log("".concat(email, " is not valid"));
}
else {
    console.log("".concat(email, " is valid"));
}
