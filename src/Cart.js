/**
 * @file      Cart.js
 * @brief     This class is designed to manage a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

"use strict";

module.exports = class Cart{

    //region private attributes
    #items = null;
    //endregion private attributes

    /**
     * @brief This method constructs a Cart Object
     * @param items : list of cartItems
     */
    constructor(items = []) {
        this.#items = items;
    }

    /**
     * @brief This property returns the list of CartItems presents in the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */
    get Items(){
        throw new Error('Method not implemented.');
    }

    /**
     * @brief This property returns the total of the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */
    get TotalPrice(){
        if (this.#items == null){
            return 0;
        }
        return this.#items.map(item => item.price).reduce((prev, next) => prev + next);
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}