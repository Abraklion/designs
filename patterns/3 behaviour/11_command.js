
/* ========================== *
 *  Паттерн Command (Команды) *
 * ========================== */

/**
 *  Класс MyMath - операции с числами
 * */
class MyMath {

  /**
   * Конструктор
   * @param {number} initialValue - начальное значения.
   */
  constructor(initialValue = 0) {
    this.num = initialValue
  }

  /**
   * квадратный корень числа
   * @returns {number}
   */
  square() {
    return this.num ** 2
  }

  /**
   * кубический корень числа
   * @returns {number}
   */
  cube() {
    return this.num ** 3
  }
}

/**
 *  Класс Command - команды
 * */
class Command {

  /**
   * Конструктор
   * @param {Object} subject - начальное значения.
   */
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  /**
   * Вызываем команду
   * @param {string} command - каманда.
   * @returns {number}
   */
  execute(command) {
    this.commandsExecuted.push(command)

    return this.subject[command]()
  }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'))
console.log(x.execute('cube'))

console.log(x.commandsExecuted)




