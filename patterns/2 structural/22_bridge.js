
/* ======================= *
 *  Паттерн Bridge (Мост)  *
 * ======================= */

/**
 *  Класс Модель
 * */
class Model {
  constructor(color) {
    this.color = color;
  }
}

/**
 *  Класс Цвет
 * */
class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}



/**
 *  Класс Цвет черный
 * */
class BlackColor extends Color {
  constructor() {
    super("dark-black");
  }
}

/**
 *  Класс Цвет серебряный
 * */
class SilverColor extends Color {
  constructor() {
    super("silvermetallic");
  }
}



/**
 *  Класс Audi
 * */
class Audi extends Model {
  constructor(color) {
    super(color);
  }

  // реализует паттерн мост
  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
}

/**
 *  Класс Bmw
 * */
class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  // реализует паттерн мост
  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
}


const blackBmw = new Bmw(new SilverColor())

console.log(blackBmw.paint())