interface FlyBehavior {
  fly(): void;
}

interface QuackBehavior {
  quack(): void;
}

abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  public constructor() {}
  public abstract display(): void;
  public performFly(): void {
    this.flyBehavior.fly();
  }
  public performQuack(): void {
    this.quackBehavior.quack();
  }
  public swim(): void {
    console.log("모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠.");
  }
}

class FlyWithWings implements FlyBehavior {
  public constructor() {}
  public fly(): void {
    console.log("날고 있어요!");
  }
}

class FlyNoWay implements FlyBehavior {
  public constructor() {}
  public fly(): void {
    console.log("저는 못 날아요.");
  }
}

class Quack implements QuackBehavior {
  public constructor() {}
  public quack(): void {
    console.log("꽥!");
  }
}

class MuteQuack implements QuackBehavior {
  public constructor() {}
  public quack(): void {
    console.log("조용~");
  }
}

class Squeak implements QuackBehavior {
  public constructor() {}
  public quack(): void {
    console.log("삑!");
  }
}

class MallardDuck extends Duck {
  public constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }
  public display(): void {
    console.log("저는 물오리입니다.");
  }
}

const mallard: Duck = new MallardDuck();
mallard.performFly();
mallard.performQuack();
mallard.display();
