
/* ======================================================= *
 *  Паттерн Chain_of_responsibility (цепочка обязанностей) *
 * ======================================================= */

/**
 *  Класс MySum - считает сумму
 * */
class MySum {

  /**
   * Конструктор
   * @param {number} initialValue - начальное значения.
   */
  constructor(initialValue = 42) {
    this.sum = initialValue
  }

  /**
   * Добавить к начальному значению
   * @param {number} value - число.
   * @returns {this}
   */
  add(value) {
    this.sum += value

    // весь смысл паттерна
    return this
  }
}

const sum1 = new MySum()
console.log(sum1.add(8).add(10).add(1).add(9).sum)

const sum2 = new MySum(0)
console.log(sum2.add(1).add(2).add(3).sum)
