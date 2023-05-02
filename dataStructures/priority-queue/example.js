
/* ========================================================= *
 *  Структура данных Очередь с приоритетом (priorityQueue)  *
 * ========================================================= */

/**
 * Узел
 */
class PriorityQueueNode {

  /**
   * Конструктор
   * @param {string} name - имя
   * @param {number} priority - приоритет
   */
  constructor(name, priority = 0) {
    if(name === undefined) {
      throw new Error(`Аргумент "name" не был передан при создании экземплера класса!`)
    }
    this.name = name
    this.priority = priority
  }

  /**
   * Приводит значение в строку и выводит
   * @return {string}
   */
  toString() {
    return `${this.name}: ${this.priority}`
  }
}


/**
 * Очередь с приоритетом
 */
class PriorityQueue {

  /**
   * Конструктор
   */
  constructor() {
    this._data = []
  }

  /**
   * Добавляет узел в очередъ по приоритету
   * Сложность: O(n)
   * @param {Object} value - новый узел
   * @return {this}
   */
  enqueue(value) {
    if (typeof value !== 'object') {
      throw new Error(`Ожидаем обьект, передан ${typeof value}`)
    }

    if(value.priority === undefined) {
      throw new Error(`У обьекта отсутствует поля priority!`)
    }

    // Сначала предположим, что элемент пойдет прямо в начало массива
    let pointOfInsertion = 0;

    // Пока не встретим элемент больше вставляемого или конец массива...
    while (pointOfInsertion < this._data.length && value.priority > this._data[pointOfInsertion].priority) {
      // ... двигаем указатель на место вставки
      pointOfInsertion++;
    }

    this._data =  pointOfInsertion === 0
        ? [value, ...this._data]
        : [...this._data.slice(0, pointOfInsertion), value, ...this._data.slice(pointOfInsertion)];

    return this
  }

  /**
   * Удалить узел из очередъ по приоритету
   * Сложность: O(1)
   * @return {Object}
   */
  dequeue() {
    return this._data.pop()
  }

  /**
   * Список узлов в очереди по приоритету
   * Сложность: O(1)
   * @return {string}
   */
  show() {
    let str = '';

    for(let i = this._data.length - 1; i >= 0; i--) {
      str += this._data[i].toString() + '\n'
    }

    return str
  }

  /**
   * Проверяет очередь на пустоту
   * Сложность: O(1)
   * @return {boolean}
   */
  isEmpty() {
    return this._data.length === 0
  }

  /**
   * Кол-во узлов в очереди
   * Сложность: O(1)
   * @return {number}
   */
  size() {
    return this._data.length
  }

}

let a = new PriorityQueueNode("Вася",2)

// вывод
const queue = new PriorityQueue()

// добавить в очередь
queue.enqueue( new PriorityQueueNode("Вася",3))
queue.enqueue( new PriorityQueueNode("Петя",2))
queue.enqueue( new PriorityQueueNode("Нюна",8))
queue.enqueue( new PriorityQueueNode("Юра",1))
queue.enqueue( new PriorityQueueNode("Катя",0))
queue.enqueue( new PriorityQueueNode("Дима", 8))


// список узлов в очереди по приоритету
console.log(`Всего клиентов: ${queue.size()}`)
console.log(`${queue.show()}`)

// обслуживаются
console.log(`Обслуживаются: ${queue.dequeue().name} \n`)

// ожидают
console.log(`Ожидают:\n${queue.show()}`)