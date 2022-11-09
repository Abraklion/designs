
/* ========================== *
 *  Паттерн State (Состояние) *
 * ========================== */

/**
 *  Класс Light
 * */
class Light {

  /**
   * Конструктор
   * @param {string} light - свет
   */
  constructor(light) {
    this.light = light
  }
}

/**
 *  Класс RedLight
 *  @extends Light
 * */
class RedLight extends Light {

  /**
   * Конструктор
   */
  constructor() {
    super('red')
  }

  /**
   * Состояние
   * @return {string}
   */
  sign() {
    return 'СТОП'
  }
}

/**
 *  Класс YellowLight
 *  @extends Light
 * */
class YellowLight extends Light {

  /**
   * Конструктор
   */
  constructor() {
    super('yellow')
  }

  /**
   * Состояние
   * @return {string}
   */
  sign() {
    return 'ГОТОВЬСЯ'
  }
}

/**
 *  Класс GreenLight
 *  @extends Light
 * */
class GreenLight extends Light {

  /**
   * Конструктор
   */
  constructor() {
    super('green')
  }

  /**
   * Состояние
   * @return {string}
   */
  sign() {
    return 'ЕДЬ!'
  }
}

/**
 *  Класс TrafficLight - реализовывает паттерн State
 * */
class TrafficLight {

  /**
   * Конструктор
   */
  constructor() {
    this.states = [
      new RedLight(),
      new YellowLight(),
      new GreenLight()
    ]
    this.current = this.states[0]
  }

  /**
   * Поменять состояние
   * @return {void}
   */
  change() {
    const total = this.states.length
    let index = this.states.findIndex(light => light === this.current)

    if (index + 1 < total) {
      this.current = this.states[index + 1]
    } else {
      this.current = this.states[0]
    }
  }

  /**
   * Состояние
   * @return {string}
   */
  sign() {
    return this.current.sign()
  }
}

const traffic = new TrafficLight()

console.log(traffic.sign())

traffic.change()
console.log(traffic.sign())

traffic.change()
console.log(traffic.sign())


