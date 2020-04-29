function generateId() {
    const randomNumber = Math.random();
    return randomNumber.toString().slice(2, 9);
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
            // this.items.splice(indexToDelete, 1);
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
    },
    staff: {
        "1": {name: "1", age: 1, salary: 1, education: ["school"]},
        [generateId()]: {name: "Staff 1", age: 30, salary: 1000, education: ["school", "university"]},
        [generateId()]: {name: "Staff 2", age: 31, salary: 1001, education: ["university"]},
    },
    showStaff() {
        // вариант 1 - цикл for in
        // for (const key in this.staff) {
        //     const {name, age, salary} = this.staff[key];
        //     console.log(`${key} - name: ${name}, age: ${age}, salary: ${salary}`)
        // }

        // вариант 2 - цикл for of по ключам объекта
        // const keys = Object.keys(this.staff);
        // for (const key of keys) {
        //     const {name, age, salary} = this.staff[key];
        //     console.log(`${key} - name: ${name}, age: ${age}, salary: ${salary}`)
        // }

        // пример использования Object.values
        // const values = Object.values(this.staff);
        // for (const value of values) {
        //     const {name, age, salary} = value;
        //     console.log(`name: ${name}, age: ${age}, salary: ${salary}`)
        // }

        // вариант 3
        const entries = Object.entries(this.staff);
        for (const entry of entries) {
            const [key, {name, age, salary, education}] = entry;
            console.log(`${key} - name: ${name}, age: ${age}, salary: ${salary}, education: ${education}`)
        }
    },
    addStaff(name, age, salary) {
        const newStaff = {name, age, salary};
        const newId = generateId();
        this.staff[newId] = newStaff;

        // this.staff[generateId()] = {name, age, salary};
    },
    removeStaff(id) {
        delete this.staff[id];
    },
    updateStaff(id, newValues) {
        this.staff[id] = {...this.staff[id], ...newValues};
    },
    getStaffById(id) {
        return this.staff[id];
    },
    getStaffByStringField(fieldName, fieldValue) {
        let result = [];
        const entries = Object.entries(this.staff);
        for (const [key, value] of entries) {
            if (value[fieldName].toLowerCase().includes(fieldValue.toLowerCase())) {
                result.push(key);
            }
        }

        return result;
    },
    getStaffByIncludesField(fieldName, fieldValue) {
        let result = [];
        const entries = Object.entries(this.staff);
        for (const [key, value] of entries) {
            if (value[fieldName].includes(fieldValue)) {
                result.push(key);
            }
        }

        return result;
    },
    getStaffByRange(fieldName, rangeStart, rangeEnd) {
        let result = [];
        const entries = Object.entries(this.staff);
        for (const [key, value] of entries) {
            const currentFieldValue = value[fieldName];
            if (currentFieldValue >= rangeStart && currentFieldValue <= rangeEnd) {
                result.push(key);
            }
        }

        return result;
    }
};
/*
*
*
// shop.addItem("Apples", 1, 100, "Fruits");
// shop.showItems();

// shop.showItems();
// shop.updateItem("1", {name: "New test name", price: 201, amount: 101});
// shop.showItems();

// shop.addItem("ice-cream", 100, 10, "freeze");
// console.log(shop.getItemsByValue("category", "fruits"));
// console.log(shop.getItemsByValue("price", 100));

// console.log(shop.getItemsByRange("price", 40, 100));
// console.log(shop.getItemsByRange("amount", 200, 400));

// shop.showItems();
// const priceLessThan100 = shop.getItemsByRange("price", 0, 99);
// for (const item of priceLessThan100) {
//     const {id} = item;
//     shop.removeItem(id);
// }
// console.log("______________")
// shop.showItems();

// const priceLessThen50 = shop.getItemsByRange("price", 0, 50);
// for (const item of priceLessThen50) {
//     const {id, price} = item;
//     shop.updateItem(id, {price: price + 20});
// }
// console.log("__________");
// shop.showItems();
*  */
//
// shop.showStaff();
// shop.addStaff("Staff 3", 32, 2000);
// console.log("_______");
// shop.showStaff();

//
// shop.showStaff();
// shop.removeStaff("1");
// console.log("_______");
// shop.showStaff();


// shop.showStaff();
// shop.updateStaff("1", {name: "Staff !!!", age: 50});
// console.log("_______");
// shop.showStaff();

// console.log(shop.getStaffById("1"));

// const staffToRemove = shop.getStaffByStringField("name", "s");
// for (const staffId of staffToRemove) {
//     shop.removeStaff(staffId);
// }
// shop.showStaff();

// const staffWithUniversityEducation = shop.getStaffByIncludesField("education", "school");
// for (const staffId of staffWithUniversityEducation) {
//     shop.removeStaff(staffId);
// }
// shop.showStaff();

// const ageMore18 = shop.getStaffByRange("age", 18, 100);
// for (const staffId of ageMore18) {
//     shop.removeStaff(staffId);
// }
// shop.showStaff();


let array = [1,2,3,4,5,6,7];
let indexToRemove = 3;
const arrayLength = array.length;


for (let i = 0; i < arrayLength; i += 1) {
    console.log(i, array[i]);
    if (i === indexToRemove) {
        array.splice(i, 1);
    }
}
console.log("_____");
console.log(array);
