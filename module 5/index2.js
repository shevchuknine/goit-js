// function OldCar() {
//     // this = новый объект
//     this.name = "Car";
//     this.isOpen = false;
//     this.speed = 0;
//
//     this.open = function () {
//         this.isOpen = true;
//     }
//
//     this.close = function () {
//         this.isOpen = false;
//     }
//
//     this.drive = function (speed) {
//         if (this.isOpen) {
//             this.speed = speed;
//         }
//     }
//
//     this.stop = function () {
//         if (this.isOpen) {
//             this.speed = 0;
//         }
//     }
//
//     // return this;
// }

// let car = new Car();
//
// car.open();
// car.drive(20);
// console.log(car);

// console.log(new Car());
// ошибка!
// console.log(Car());

// function Car() {
//     this.name = "Car";
//     this.isOpen = false;
//     this.speed = 0;
// }
//
// // Car.__proto__
// // Car.prototype
//
// Car.prototype.open = function () {
//     this.isOpen = true;
// }
//
// Car.prototype.close = function () {
//     this.isOpen = false;
// }
//
// Car.prototype.drive = function (speed) {
//     if (this.isOpen) {
//         this.speed = speed;
//     }
// }
//
// Car.prototype.stop = function () {
//     if (this.isOpen) {
//         this.speed = 0;
//     }
// }
//
// let car = new Car();
// // console.dir(car);
// let anotherCar = new Car();
// // console.dir(car);
//
// let oldCar = new OldCar();
// // console.dir(oldCar);
// let anotherOldCar = new OldCar();

// так делать неправильно!
// Array.prototype.join = function() {console.log("hello, ny name Join")};
// console.log([1,2,3].join());


// function A() {
//     this.fieldA = "fieldA_data";
// }
//
// A.prototype.methodA = function() {
//     console.log(this, this.fieldA);
// };
//
// function B() {
//     // A.call(this);
//     A.apply(this);
//
//     this.fieldB = "fieldB_data";
// }
//
// // console.log(B.prototype);
//
// B.prototype = Object.create(A.prototype);
// B.prototype.constructor = B;
//
// B.prototype.methodB = function() {
//     console.log("methodB", this.fieldB);
// };
// //
// // // console.dir(new A())
// console.dir(new B());

// class classA {
//     constructor() {
//         this.fieldA = "fieldA";
//     }
//
//     methodA() {
//
//     }
// }
//
// class classB extends classA {
//     constructor() {
//         super();
//         this.fieldB = "fieldB";
//     }
//
//     methodB() {
//
//     }
// }
//
// let classBObj = new classB();
// console.dir(classBObj);

// class TestStaticFields {
//     static staticField = "asd";
//
//     static staticMethod() {
//
//     }
// }
//
// const testStaticFields = new TestStaticFields();
// // console.dir(testStaticFields);
//
// console.dir(TestStaticFields);
//
// function Test() {
//
// }
//
// Test.staticField = "asd";
// Test.staticMethod = function() {};
//
// console.dir(Test);

// class Asd {
//     methodTest() {
//
//     }
// }
//
// Asd.testField = "asd";
//
// Asd.prototype = {};
//
// console.dir(Asd);

// class A {
//     constructor() {
//         this.usualMethod = this.usualMethod.bind(this);
//     }
//
//     arrowMethod = () => {
//         console.log(this);
//     };
//
//     usualMethod() {
//         console.log(this);
//     }
// }
//
// const a = new A();
// // a.arrowMethod();
// // a.usualMethod();
//
// const arrowFunc = a.arrowMethod;
// const usualFunc = a.usualMethod;
//
// const usualMethodFromProto = Object.getPrototypeOf(a).usualMethod;
//
// arrowFunc();
// usualFunc();
//
// usualMethodFromProto();

class A {
    arrow = () => {
        console.log("class A, function arrow");
    };

    arrowAnother = () => {
        console.log("class A, function arrowAnother");
    };

    another() {
        console.log("class A, another");
    }
}

class B extends A {
    arrow = () => {
        super.arrow();

        console.log("class B, function arrow");
    };

    arrowAnother() {
        super.arrowAnother();

        console.log("class B, function arrowAnother");
    };

    another = () => {
        super.another();

        console.log("class B, another");
    }
}

const b = new B();
// console.dir(b);
// b.arrow();

b.arrowAnother();
console.dir(b);

b.another();




























































