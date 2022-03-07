const Error = require("./Error.js");

class CartException extends Error {
}

module.exports = class EmptyCartException extends CartException {
}