/**
 * @file      CartItem.js
 * @brief     This class is designed to manage a cart item.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

"use strict";

const InvalidArticleIdException = require("./exceptions/CartItemException.js");
const InvalidQuantityException = require("./exceptions/CartItemException.js");
const InvalidPriceException = require("./exceptions/CartItemException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    /**
     * @brief This method constructs a CartItem Object
     * @param articleId
     * @param quantity
     * @param price (in CHF)
     * @exception InvalidArticleIdException is thrown when the article is smaller than 1.
     * @exception InvalidQuantityException is thrown when the quantity is smaller than 1.
     * @exception InvalidPriceException is thrown when the price is smaller than 10.
     */
    constructor(articleId, quantity, price) {
        if (articleId < 1) {
            throw new InvalidArticleIdException('The id cannot be smaller than one.');
        }
        if (quantity < 1) {
            throw new InvalidQuantityException('The id cannot be smaller than one.');
        }
        if (price < 10) {
            throw new InvalidPriceException('The id cannot be smaller than one.');
        }
        this.#articleId = articleId;
        this.#quantity = quantity;
        this.#price = price;
    }
    /**
     * @brief This property gets the article id
     */
    get articleId() {
        return this.#articleId;
    }

    /**
     * @brief This property gets the quantity
     */
    get quantity() {
        return this.#quantity;
    }

    /**
     * @brief This property sets the quantity
     * @param value, the new quantity to set
     * @exception InvalidQuantityException is thrown when the quantity is smaller than 1.
     */
    set Quantity(value) {
        if (value < 1) {
            throw new InvalidQuantityException('The quantity cannot be smaller than one.');
        }
        this.#quantity = value;
    }

    /**
     * @brief This property gets the price
     */
    get price() {
        return this.#price;
    }

    /**
     * @brief This property gets the price
     * @param value, the new price to set
     * @exception InvalidPriceException is thrown when the price is smaller than 10.
     */
    set Price(value) {
        if (value < 10) {
            throw new InvalidPriceException('The price cannot be smaller than 10.');
        }
        this.#price = value;
    }

    /**
     * @brief This property gets the total
     */
    get total() {
        return this.#quantity * this.#price;
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}

//TODO externalize Error class (duplicate with Cart and CartItem)
class Error {
    #message;
    constructor(message) {
        this.#message = message;
    }

    get message() {
        return this.#message;
    }
}

class CartItemException extends Error {
}

module.exports = class InvalidArticleIdException extends CartItemException {
}





