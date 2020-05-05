'use strict';

class First {
    sayHello() {
        console.log(`Привет я метод родителя!`);
    }
}

class Second  extends First {
    sayHelloTo() {
        super.sayHello();
        console.log(`А я наследуемый метод!`);
    }
}

const second = new Second();
second.sayHelloTo();