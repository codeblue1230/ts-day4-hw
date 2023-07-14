import { v4 as uuidv4 } from "uuid"


class Shop {

    constructor (
        private _items: Item[]
    ) {}

    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }

}


class Item {

    constructor (
        private _id: string,
        private _name: string,
        private _price: number,
        private _description: string,
    ) {}

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

}


class User {

    constructor (
        private _id: string,
        private _name: string,
        private _age: number,
        private _cart: Item[]
    ) {}

    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

    addToCart(item:Item):void {
        this.cart.push(item)
    }

    removeFromCart(item:Item):void {
        this.cart = this.cart.filter((test) => test !== item)
    }    
    
    removeQuantityFromCart(item:Item, quantity:number):void {
        let index = 0
        while (index < this.cart.length && quantity > 0) {
            if (this.cart[index].name === item.name) {
                this.cart.splice(index, 1)
                quantity -= 1
            } else {
                index += 1
            }
        }
    }

    cartTotal():number {
        let total = 0
        for (let i of this.cart) {
            total += i.price
        }
        return total
    }

    printCart():void {
        let itemList = []
        for (let item of this.cart) {
            itemList.push(item.name)
        }
        console.log(itemList)
    }

} 


// Driver code to emulate front end user

// Create a Shop
let marcCart = new Item(uuidv4(), "cheese", 6, "mozzarella cheese")
let milk = new Item(uuidv4(), "milk", 5, "carton of milk")
let salmon = new Item(uuidv4(), "salmon", 20, "2 lbs of Salmon")

let shop = new Shop([marcCart, salmon, milk])
console.log(shop)

// Create a User
let marc = new User(uuidv4(), "Marc", 24, [])
console.log(marc)

// Add Items to user's cart, print the cart and then use both remove functions
marc.addToCart(milk)
marc.addToCart(milk)
marc.addToCart(salmon)
marc.addToCart(milk)
marc.addToCart(marcCart)
marc.addToCart(marcCart)

marc.printCart()

marc.removeFromCart(milk)

marc.printCart()

marc.removeQuantityFromCart(marcCart,1)

marc.printCart()







