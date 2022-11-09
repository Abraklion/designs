
/* ============================= *
 *  Паттерн Strategy (Стратегия) *
 * ============================= */

/**
 *  Класс Vehicle - Транспортное средство
 * */
class Vehicle {

  /**
   * Время в пути
   * @return {number}
   */
  travelTime() {
    return this.timeTaken
  }
}

/**
 *  Класс Bus
 *  @extends Vehicle
 * */
class Bus extends Vehicle {

  /**
   * Конструктор
   */
  constructor() {
    super()
    this.timeTaken = 10
  }
}

/**
 *  Класс Taxi
 *  @extends Vehicle
 * */
class Taxi extends Vehicle {

  /**
   * Конструктор
   */
  constructor() {
    super()
    this.timeTaken = 5
  }
}

/**
 *  Класс Car
 *  @extends Vehicle
 * */
class Car extends Vehicle {

  /**
   * Конструктор
   */
  constructor() {
    super()
    this.timeTaken = 3
  }
}

/**
 *  Класс Commute - реализует паттерн стратегия
 * */
class Commute {

  /**
   * возвращает время на путишествия в зависимости от транспорта
   * @return {number}
   */
  travel(transport) {
    return transport.travelTime()
  }
}

const commute = new Commute()

console.log(commute.travel(new Taxi()))
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Car()))
