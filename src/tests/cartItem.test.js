/**
 * @file      cart.test.js
 * @brief     This class is designed to test the behaviour of a cartItem.
 * @author    Created by Nicolas.GLASSEY
 * @version   13-02-2022 - original (dedicated to RIA1)
 */

"use strict";

const CartItem =  require('../CartItem.js');

const InvalidArticleIdException = require("../exceptions/CartItemException.js");
const InvalidQuantityException = require("../exceptions/CartItemException.js");
const InvalidPriceException = require("../exceptions/CartItemException.js");

test('allGetters_NominalCase_Success', () => {
    //given
    let articleId = 1;
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, quantity, price);
    let total = 200;

    //when
    //we call the getters directly in assertion below
    //then
    expect(articleId).toEqual(cartItem.ArticleId);
    expect(quantity).toEqual(cartItem.Quantity);
    expect(price).toEqual(cartItem.Price);
    expect(total).toEqual(cartItem.Total);
})

test('constructor_InvalidArticleId_ThrowException', () => {
    //given
    let articleId = -1;//Invalid article id (smaller than 1)
    let quantity = 10;
    let price = 20;

    //when
    expect(() => new CartItem(articleId, quantity, price)).toThrow(InvalidArticleIdException);

    //then
    //Exception is thrown
})

test('constructor_InvalidQuantity_ThrowException', () => {
    //given
    let articleId = 1;
    let quantity = -10;//Invalid article id (smaller than 1)
    let price = 20;

    //when
    expect(() => new CartItem(articleId, quantity, price)).toThrow(InvalidQuantityException);

    //then
    //Exception is thrown
})

test('constructor_InvalidPrice_ThrowException', () => {
    //given
    let articleId = 1;
    let quantity = 10;
    let price = 9;//Invalid price (smaller than 10)

    //when
    expect(() => new CartItem(articleId, quantity, price)).toThrow(InvalidPriceException);

    //then
    //Exception is thrown
})

test('Quantity_SetQuantityNominalCase_Success', () => {
    //given
    let articleId = 1;
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, quantity, price);
    let expectedQuantity = 15;
    let expectedTotal = 300;

    //when
    cartItem.Quantity = expectedQuantity;

    //then
    expect(expectedQuantity).toEqual(cartItem.Quantity);
    expect(expectedTotal).toEqual(cartItem.Total);
})

test('Quantity_SetQuantityInvalidValue_ThrowException', () => {
    //given
    let articleId = 1;
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, quantity, price);
    let invalidQuantityToSet = -1;//Invalid quantity (smaller than 1)

    //when
    expect(() => cartItem.Quantity = invalidQuantityToSet).toThrow(InvalidQuantityException);

    //then
    //Exception is thrown
})

test('Price_SetPriceNominalCase_Success', () => {
    //given
    let articleId = 1;
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, quantity, price);
    let expectedPrice = 22;
    let expectedTotal = 220;

    //when
    cartItem.Price = expectedPrice;

    //then
    expect(expectedPrice).toEqual(cartItem.Price);
    expect(expectedTotal).toEqual(cartItem.Total);
})

test('Price_SetPriceInvalidPrice_ThrowException', () => {
    //given
    let articleId = 1;
    let quantity = 10;
    let price = 20;
    let cartItem = new CartItem(articleId, quantity, price);
    let invalidPriceToSet = 9;//Invalid quantity (smaller than 10)

    //when
    expect(() => cartItem.Price = invalidPriceToSet).toThrow(InvalidPriceException);

    //then
    //Exception is thrown
})
