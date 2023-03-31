class KnifeBehavior {
    useWeapon() {
        console.log("서걱");
    }
}
class SwordBehavior {
    useWeapon() {
        console.log("스릉");
    }
}
class BowAndArrowBehavior {
    useWeapon() {
        console.log("푝");
    }
}
class AxeBehavior {
    useWeapon() {
        console.log("콰직");
    }
}
class Character {
    fight() {
        this.weapon.useWeapon();
    }
    setWeapon(w) {
        this.weapon = w;
    }
}
class Queen extends Character {
    constructor() {
        super();
        this.weapon = new KnifeBehavior();
    }
}
class King extends Character {
    constructor() {
        super();
        this.weapon = new BowAndArrowBehavior();
    }
}
class Troll extends Character {
    constructor() {
        super();
        this.weapon = new AxeBehavior();
    }
}
class Knight extends Character {
    constructor() {
        super();
        this.weapon = new SwordBehavior();
    }
}
const queen = new Queen();
queen.fight();
const king = new King();
king.fight();
const troll = new Troll();
troll.fight();
const knight = new Knight();
knight.fight();
