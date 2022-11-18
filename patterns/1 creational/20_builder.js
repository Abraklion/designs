
/* ============================= *
 *  Паттерн Builder (Строитель)  *
 * ============================= */

/**
 *  Класс Автомобиль
 * */
class Car {

  /**
   * Конструктор
   */
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

/**
 *  Класс Сборка автомобиля - пеализует паттерн Builder
 * */
class CarBuilder {

  /**
   * Конструктор
   */
  constructor() {
    this.car = new Car();
  }

  /**
   * Добавить автопилот
   * @param {boolean} autoPilot
   * @return {this}
   */
  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  /**
   * Добавить парктроник
   * @param {boolean} parktronic
   * @return {this}
   */
  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  /**
   * Добавить сигнал
   * @param {boolean} signaling
   * @return {this}
   */
  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  /**
   * Обновить двигатель
   * @param {string} engine
   * @return {this}
   */
  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  /**
   * Построить автомобиль
   * @return {Object}
   */
  build() {
    return this.car;
  }
}


const myNewCar = new CarBuilder()
                        .addSignaling(true)
                        .updateEngine('V8')
                        .build()

console.log(myNewCar)