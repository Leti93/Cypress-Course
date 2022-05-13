var authenticator = require('authenticator');
const secret_key = 'HNJR27RXZPSSF3MB';
var formattedToken = authenticator.generateToken(secret_key);
console.log("The Token is: " + formattedToken)