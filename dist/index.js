"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Shop {
    constructor(_items) {
        this._items = _items;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
class Item {
    constructor(_id, _name, _price, _description) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
        this._description = _description;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
class User {
    constructor(_id, _name, _age, _cart) {
        this._id = _id;
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter((test) => test !== item);
    }
    removeQuantityFromCart(item, quantity) {
        let index = 0;
        // for (let i of this.cart) {
        //     if (i.name !== item.name && quantity > 0 && quantity <= this.cart.length) {
        //         quantity -= 1
        //         newList.push(i)
        //     }
        // }
        // this.cart = newList
        while (index < this.cart.length && quantity > 0) {
            if (this.cart[index].name === item.name) {
                this.cart.splice(index, 1);
                quantity -= 1;
            }
            else {
                index += 1;
            }
        }
    }
    cartTotal() {
        let total = 0;
        for (let i of this.cart) {
            total += i.price;
        }
        return total;
    }
    printCart() {
        let itemList = [];
        for (let item of this.cart) {
            itemList.push(item.name);
        }
        console.log(itemList);
    }
}
// console.log(marc)
// marc.removeFromCart(marcCart)
// console.log(marc)
// console.log(marc)
// console.log(marc.cartTotal())
// marc.printCart()
// Driver code to emulate front end user
// Create a Shop
let marcCart = new Item((0, uuid_1.v4)(), "cheese", 6, "mozzarella cheese");
let milk = new Item((0, uuid_1.v4)(), "milk", 5, "carton of milk");
let salmon = new Item((0, uuid_1.v4)(), "salmon", 20, "2 lbs of Salmon");
let shop = new Shop([marcCart, salmon, milk]);
console.log(shop);
// Create a User
let marc = new User((0, uuid_1.v4)(), "Marc", 24, []);
console.log(marc);
// Add Items to user's cart, print the cart and then use both remove functions
marc.addToCart(milk);
marc.addToCart(milk);
marc.addToCart(salmon);
marc.addToCart(milk);
marc.addToCart(marcCart);
marc.addToCart(marcCart);
marc.printCart();
marc.removeFromCart(milk);
marc.printCart();
marc.removeQuantityFromCart(marcCart, 3);
marc.printCart();
