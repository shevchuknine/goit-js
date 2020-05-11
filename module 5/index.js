// function generateId() {
//     const randomNumber = Math.random();
//     return randomNumber.toString().slice(2);
// };
//
// class ShopDB {
//     static owner = "Owner";
//
//     static showOwner() {
//         console.log(`owner: ${ShopDB.owner}`);
//         console.dir(this);
//         console.log(`owner: ${this.owner}`);
//     }
//
//     constructor(name, address = "Default address") {
//         this.name = name;
//         this._address = address;
//         this.staff = {
//             "id_1": {name: "1", age: 1, salary: 1, education: ["school"]}
//         };
//     }
//
//     getName() {
//         return this.name;
//     }
//
//     setName(value) {
//         this.name = value;
//     }
//
//     get address() {
//         return this._address;
//     }
//
//     // set address(value) {
//     //     this._address = value;
//     // }
//
//     showShopInfo() {
//         console.log(`name: ${this.name}, address: ${this.address}`);
//     }
//
//     showStaff() {
//         const entries = Object.entries(this.staff);
//         for (const entry of entries) {
//             const [key, {name, age, salary, education}] = entry;
//             console.log(`${key} - name: ${name}, age: ${age}, salary: ${salary}, education: ${education}`)
//         }
//     }
//
//     addStaff(name, age, salary) {
//         const newStaff = {name, age, salary};
//         const newId = generateId();
//         this.staff[newId] = newStaff;
//
//         // this.staff[generateId()] = {name, age, salary};
//     }
// }
//
// const shopDB1 = new ShopDB("Shop 1", "Kiev, 1-st street");
// shopDB1.showShopInfo();
// // shopDB1.addStaff("name", 123, 123123);
// // shopDB1.showStaff();
//
// console.log("________");
//
// const shopDB2 = new ShopDB("Shop 2", "Kiev, 2-nd street");
// shopDB2.showShopInfo();
// // shopDB2.showStaff();
//
// console.log(shopDB2.address);
// shopDB2.address = "address - 2";
// console.log(shopDB2.address);
// console.log(shopDB2.getName());
//
// console.log(ShopDB.owner);
//
// ShopDB.showOwner();

// ключ юзера - логин
class Auth {
    constructor() {
        this.users = {

        };
    }

    checkIsUserExist(login) {
        const userLogin = Object.keys(this.users).find((userLogin) => {
            return userLogin === login;
        });

        return userLogin !== undefined;
    }

    checkIsPasswordCorrect(login, password) {
        const user = this.users[login];

        return user.password === password;
    }

    authenticate(login) {
        this.users[login].isAuth = true;
    }

    login(login, password) {
        const isUserExist = this.checkIsUserExist(login);
        if (!isUserExist) {
            console.log("login is incorrect");
            return;
        }

        const isPasswordCorrect = this.checkIsPasswordCorrect(login, password);
        if (!isPasswordCorrect) {
            console.log("password is incorrect");
            return;
        }

        this.authenticate(login);
        console.log("auth complete");
    }

    register(login, password, repeatPassword) {
        const existedLogin = Object.keys(this.users).find((existedLogin) => {
             return existedLogin === login;
        });

        if (existedLogin !== undefined) {
            console.log("login is busy");
            return;
        }

        if (password !== repeatPassword) {
            console.log("passwords are different");
            return;
        }

        this.users[login] = {
            password,
            isAuth: false
        };
        console.log("register complete");
    };
}

// const auth = new Auth();
// auth.register("asd", "pass", "pass");
//
// auth.register("asd2", "pass2", "pass2");
//
// auth.login("asd", "pass2");

class AuthWithCaptcha extends Auth {
    emulateCaptcha() {
        return Math.random() > 0.5;
    }

    login(login, password) {
        const isUserExist = super.checkIsUserExist(login);
        if (!isUserExist) {
            console.log("login is incorrect");
            return;
        }

        const isPasswordCorrect = super.checkIsPasswordCorrect(login, password);
        if (!isPasswordCorrect) {
            console.log("password is incorrect");
            return;
        }

        super.authenticate(login);
        console.log("auth complete");

        // еще одно решение, но с другой постановкой задачи
        // const isCaptchaCorrect = this.emulateCaptcha();
        // if (!isCaptchaCorrect) {
        //     console.log("captcha is incorrect");
        //     return;
        // }
        //
        // super.login(login, password);
    }
}

const authWithCaptcha = new AuthWithCaptcha();
authWithCaptcha.register("asd", "pass", "pass");
authWithCaptcha.login("asd", "pass");
console.log(authWithCaptcha);



