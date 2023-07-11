
/* ======================================================== *
 *  Open-closed principle ( принцип открытости/закрытости ) *
 * ======================================================== */

/** ===================================== *
 *    Пример который нарушает принцип     *
 * ====================================== */

// класс Weapon нарушает принчип открытости/закрытости, потому что для каждого оружия надо переписывать метод attack()
    // да все работает, но не за счет добавления новый сущности, а за счет изменения старой

class Weapon1 {
    type : string;
    damage: number; // 0 - 100;
    range: number; // 0 - 100;

    constructor(type: string, damage: number, range: number) {
        this.type = type;
        this.damage = damage;
        this.range = range;
    }

    attack() {
        if(this.type === 'sword') {
            console.log('Удар мечом с уроном' + this.damage);
        }
        if(this.type === 'crossbow') {
            console.log('Выстрел из арболета с уроном' + this.damage);
        }
    }
}

class Character1 {
    name: string;
    weapon: Weapon;

    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon;
    }

    attack() {
        this.weapon.attack();
    }
}

const sword1 = new Weapon1('sword', 10, 2)
const character1 = new Character1('Warrior', sword1)
character1.attack()

const crossbow1 = new Weapon1('crossbow', 50, 10)
character1.changeWeapon(crossbow1)
character1.attack()

/** ========================================= *
 *    Пример который НЕ нарушает принцип      *
 * ========================================== */

// добавляем интерфейс Attacker с методом attack() который все наследник должны будут реализовать
    // при создании нового оружия, сначала создаем класс с названием этого оружия т.е расширяем класс Weapon
    // все работает, но уже не за счет изменения класса Weapon, а за счет расширения

interface Attacker {
    attack: () => void;
}
class Weapon implements Attacker {
    damage: number; // 0 - 100;
    range: number; // 0 - 100;

    constructor( damage: number, range: number) {
        this.damage = damage;
        this.range = range;
    }

    attack() {}
}

class Sword extends Weapon {
    attack() {
        console.log('Удар мечом с уроном ' + this.damage)
    }
}

class Crossbow extends Weapon {
    attack() {
        console.log('Выстрел из арбалета с уроном ' + this.damage)
    }
}

class Knife extends Weapon {
    attack() {
        console.log('Удар ножом с уроном ' + this.damage)
    }
}

class Character {
    name: string;
    weapon: Weapon;

    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon;
    }

    attack() {
        this.weapon.attack();
    }
}

const sword = new Sword(15, 2);
const character = new Character('Warrior', sword);
character.attack()

const crossbow = new Crossbow(40, 100);
character.changeWeapon(crossbow);
character.attack()