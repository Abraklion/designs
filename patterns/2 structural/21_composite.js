
/* ================================= *
 *  Паттерн Composite (Компоновщик)  *
 * ================================= */

/**
 *  Класс Запчасти
 * */
class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }
}



/**
 *  Класс Двигатель
 * */
class Engine extends Equipment {
  constructor() {
    super();
    this.setName('Engine');
    this.setPrice(800);
  }
}

/**
 *  Класс Кузов
 * */
class Body extends Equipment {
  constructor() {
    super();
    this.setName('Body');
    this.setPrice(3000);
  }
}

/**
 *  Класс Инструменты
 * */
class Tools extends Equipment {
  constructor() {
    super();
    this.setName('Tools');
    this.setPrice(4000);
  }
}



/**
 *  Класс Компоновщик - реализует паттерн Composite
 * */
class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments
      .map(equipment => equipment.getPrice())
      .reduce((a, b) => a + b);
  }
}



/**
 *  Класс Машина
 * */
class Car extends Composite {
  constructor() {
    super();
    this.setName('Audi');
  }
}



const myCar = new Car()

myCar.add(new Engine())
myCar.add(new Body())
myCar.add(new Tools())

console.log(`${myCar.getName()} price is ${myCar.getPrice()}$`)