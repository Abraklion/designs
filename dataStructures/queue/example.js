
/* ========================================= *
 *  Структура данных Очередь (Queue (FIFO))  *
 * ========================================= */

/**
 * Узел
 */
class QueueNode {

  /**
   * Конструктор
   * @param {*} value - значение узла
   * @param {Object|null=} next - указатель на следующий узел
   */
  constructor(value, next = null) {
    this.value = value
    this.next = next
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
 * Очередь
 */
class Queue {

  /**
   * Конструктор
   */
  constructor() {
    this.head = null // голова
    this.tail = null // хвост
    this.lenght = 0
  }

  /**
   * Добавляет узел в конец списка (коллекции)
   * Сложность: O(1)
   * @param {*} value - значение нового узла
   * @return {number} - длина списка
   */
  push(value) {
    const newNode = new QueueNode(value)

    if(!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode

      return ++this.lenght
    }

    this.tail.next = newNode
    this.tail = newNode

    return ++this.lenght
  }

  /**
   * Удаляет первый добавленный узел и возвращает его значение
   * Сложность: O(1)
   * @return {*} - значение удаленого узла
   */
  shift() {
    let result;

    if(this.head !== null) {
      result =  this.head.value

      this.head = this.head.next

      if (--this.lenght === 0) {
        this.tail = null
      }
    }

    return result
  }

}


// вывод
const stack = new Queue()

// добавить в стек
stack.push('a')
stack.push('b')
stack.push('c')

// удаляет элемент из стека
console.log(`Удаляет элемент из стека с возвращает: ` + stack.shift())

// вывести стек
console.log(`Стек ` + JSON.stringify(stack))
