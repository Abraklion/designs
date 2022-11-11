
/* ======================== *
 *  Паттерн Module (Модуль) *
 * ======================== */

/**
 * Модуль 1 который работает на экспорт
 * */
let User = (function () {

  /**
   * @type {Object}
   */
  let exp = {}

  class User {

    constructor(name, age) {
      this.name = name
      this.age = age
    }

    log() {
      console.log(`Привет меня завут ${this.name}, мне ${this.age} лет`)
    }

  }

  let message = "Привет!!!"

  // экспортируем из этого модуля User
  exp.User = User

  // экспортируем из этого модуля message
  exp.message = message

  return exp

})();


/**
 * Модуль 2 который работает на экспорт
 * */
let calc = (function () {

  /**
   * @type {Object}
   */
  let exp = {}

  // экспортируем из этого модуля add
  exp.add = (t1, t2) => {
    return t1 + t2
  }

  // экспортируем из этого модуля sub
  exp.sub = (t1, t2) => {
    return t1 - t2
  }

  return exp

})();


/**
 * Модуль который работает на импорт: принимая аргумент User
 * */
(function({User,message},calc) {

  calc.dasd = "ffff"

  new User("Андрей", 18).log()

  console.log(`${message} сложим ${calc.add(5,5)}`)

})(User,calc);

/**
 * Модуль который работает на импорт: принимая аргумент User
 * */
(function(User2) {

  new User2.User("Вася", 20).log()

  console.log(User2.message)

})(User);
