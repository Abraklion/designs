
/* ============================ *
 *  Паттерн Adapter (Адаптер)  *
 * ============================ */

/**
 *  Класс OldCalc - старый калькулятор
 * */
class OldCalc {

  /**
   * Получить рукультат
   * @param {number} t1 - оперант 1
   * @param {number} t2 - оперант 2
   * @param {string} operation - какую операцию следать
   * @return {number}
   */
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return t1 + t2
      case 'sub': return t1 - t2
      default: return NaN
    }
  }
}

/**
 *  Класс NewCalc - новый калькулятор
 * */
class NewCalc {

  /**
   * Сложения
   * @param {number} t1 - оперант 1
   * @param {number} t2 - оперант 2
   * @return {number}
   */
  add(t1, t2) {
    return t1 + t2
  }

  /**
   * Вычитания
   * @param {number} t1 - оперант 1
   * @param {number} t2 - оперант 2
   * @return {number}
   */
  sub(t1, t2) {
    return t1 - t2
  }
}

/**
 *  Класс CalcAdapter - использует паттерн Adapter, производит взаимодействия двух верхних классов
 * */
class CalcAdapter {

  /** Конструктор */
  constructor() {
    this.calc = new NewCalc()
  }

  /**
   * Получить результат
   * @param {number} t1 - оперант 1
   * @param {number} t2 - оперант 2
   * @param {string} operation - какую операцию следать
   * @return {number}
   */
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return this.calc.add(t1, t2)
      case 'sub': return this.calc.sub(t1, t2)
      default: return NaN
    }
  }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5))

// использует паттерн Adapter
const adapter = new CalcAdapter()
console.log(adapter.operations(25, 10, 'sub'))
