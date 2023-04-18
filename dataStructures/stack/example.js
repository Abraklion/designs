
/* ====================================== *
 *  Структура данных Стек (Stack (LIFO))  *
 * ====================================== */

/**
 * Узел
 */
class StackNode {

  /**
   * Конструктор
   * @param {*} value - значение узла
   * @param {Object|null=} prev - указатель на предыдущий узел
   */
  constructor(value, prev = null) {
      this.value = value
      this.prev = prev
  }

  /**
   * Приводит значение в строку и выводит
   * @return {string}
   */
  toString() {
    return `${this.value}`
  }
}


/**
 * Стек
 */
class Stack {

  /**
   * Конструктор
   */
  constructor() {
    this.last = null // ссылка на последний узел
    this.lenght = 0
  }

  /**
   * Добавляет узел в конец списка (коллекции)
   * Сложность: O(1)
   * @param {*} value - значение нового узла
   * @return {number} - длина списка
   */
  push(value) {
    this.last = new StackNode(value, this.last)

    return ++this.lenght
  }

  /**
   * Удаляет последний добавленный узел и возвращает его значение
   * Сложность: O(1)
   * @return {*} - значение удаленого узла
   */
  pop() {
    let result;

    if(this.last !== null) {
      result =  this.last.value

      this.last = this.last.prev
      this.lenght--
    }

    return result
  }


}


// вывод
const stack = new Stack()

// добавить в стек
stack.push('a')
stack.push('b')
stack.push('c')

// удаляет элемент из стека
console.log(`Удаляет элемент из стека с возвращает: ` + stack.pop())

// вывести стек
console.log(`Стек ` + JSON.stringify(stack))
