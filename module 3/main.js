function generateId() {
    const randomNumber = Math.random();
    return randomNumber.toString().slice(2);
}

const shop = {
    name: "Shop #1",
    address: "Kiev",
    items: [
        {id: "1", name: "Test item", price: 90, amount: 200, category: "fruits"},
        {id: "2", name: "apples", price: 10, amount: 1, category: "fruits"}
    ],
    showItems() {
        for(const item of this.items) {
            const {id, name, price, amount} = item;
            console.log(`(${id}) - ${name}: ${price}$, amount: ${amount}`);
        }
    },
    addItem(name, price, amount, category) {
        const newItem = {id: generateId(), name, price, amount, category};
        this.items.push(newItem);
    },
    removeItem(id) {
        const indexToDelete = this.getItemPositionById(id);

        if (indexToDelete !== -1) {
            this.items = [...this.items.slice(0, indexToDelete), ...this.items.slice(indexToDelete + 1)];
        }
    },
    updateItem(id, newValues) {
        const indexToUpdate = this.getItemPositionById(id);
        const itemToUpdate = this.getItemById(id);

        this.items[indexToUpdate] = {...itemToUpdate, ...newValues};
    },
    getItemPositionById(id) {
        let index = -1;
        for (let i = 0; i < this.items.length; i += 1) {
            const currentItem = this.items[i];

            if (currentItem.id === id) {
                index = i;
                break;
            }
        }
        return index;
    },
    getItemById(id) {
        const indexToUpdate = this.getItemPositionById(id);
        return this.items[indexToUpdate];
    },
    getItemsByValue(fieldName, fieldValue) {
        const items = this.items;
        let result = [];
        for (const item of items) {
            if (item[fieldName] === fieldValue) {
                result.push(item);
            }
        }
        return result;
    },
    getItemsByRange(fieldName, rangeStart, rangeEnd) {
        const items = this.items;
        let result = [];
        for (const item of items) {
            const fieldValue = item[fieldName];
            if (fieldValue >= rangeStart && fieldValue <= rangeEnd) {
                result.push(item);
            }
        }
        return result;
    }
};

shop.addItem("Apples", 1, 100, "Fruits");
// shop.showItems();

// shop.showItems();
// shop.updateItem("1", {name: "New test name", price: 201, amount: 101});
// shop.showItems();

shop.addItem("ice-cream", 100, 10, "freeze");
// console.log(shop.getItemsByValue("category", "fruits"));
// console.log(shop.getItemsByValue("price", 100));

// console.log(shop.getItemsByRange("price", 40, 100));
// console.log(shop.getItemsByRange("amount", 200, 400));

shop.showItems();
// const priceLessThan100 = shop.getItemsByRange("price", 0, 99);
// for (const item of priceLessThan100) {
//     const {id} = item;
//     shop.removeItem(id);
// }
// console.log("______________")
// shop.showItems();

const priceLessThen50 = shop.getItemsByRange("price", 0, 50);
for (const item of priceLessThen50) {
    const {id, price} = item;
    shop.updateItem(id, {price: price + 20});
}
console.log("__________")
shop.showItems();


