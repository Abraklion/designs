
/* ============================= *
 *  Паттерн Flyweight (Легковес) *
 * ============================= */

/**
 *  Класс Car - машины
 * */
class Car {

  /**
   * Конструктор
   * @param {string} model - модель.
   * @param {number} price - стоимость.
   */
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

/**
 *  Класс CarFactory - шабрика в которой используется паттерн Flyweight
 * */
class CarFactory {

  /** Конструктор */
  constructor() {
    this.cars = []
  }

  /**
   * Коздает экземпляр класса
   * @param {string} model - модель.
   * @param {number} price - стоимость.
   * @return {Object}
   */
  create(model, price) {

    // вся суть патерна в этих строчках
    const candidate = this.getCar(model)
    if (candidate) {
      return candidate
    }
    // конец

    const newCar = new Car(model, price)
    this.cars.push(newCar)

    return newCar
  }

  /**
   * Проверяем есть ли экземпляр в кэше
   * @param {string} model - модель.
   * @return {Object}
   */
  getCar(model) {
    return this.cars.find(car => car.model === model)
  }
}

const factory = new CarFactory()

const bmwX6 = factory.create('bmw', 10000)
const audi = factory.create('audi', 12000)
const bmwX3 = factory.create('bmw', 8000)

console.log(bmwX3 === bmwX6)

