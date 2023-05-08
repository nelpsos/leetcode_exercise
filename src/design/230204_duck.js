class Duck {
    constructor() { }
    performFly() {
        this.flyBehavior.fly();
    }
    performQuack() {
        this.quackBehavior.quack();
    }
    swim() {
        console.log("모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠.");
    }
}
class FlyWithWings {
    constructor() { }
    fly() {
        console.log("날고 있어요!");
    }
}
class FlyNoWay {
    constructor() { }
    fly() {
        console.log("저는 못 날아요.");
    }
}
class Quack {
    constructor() { }
    quack() {
        console.log("꽥!");
    }
}
class MuteQuack {
    constructor() { }
    quack() {
        console.log("조용~");
    }
}
class Squeak {
    constructor() { }
    quack() {
        console.log("삑!");
    }
}
class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }
    display() {
        console.log("저는 물오리입니다.");
    }
}
const mallard = new MallardDuck();
mallard.performFly();
mallard.performQuack();
mallard.display();
