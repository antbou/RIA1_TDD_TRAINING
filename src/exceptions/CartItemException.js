class Error {
    constructor(message) {
        this.message = message;
    }
}

class CartItemException extends Error{
}

module.exports = class InvalidArticleIdException extends CartItemException{
}

module.exports = class InvalidQuantityException extends CartItemException{
}

module.exports = class InvalidPriceException extends CartItemException{
}