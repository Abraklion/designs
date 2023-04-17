
/* ================================================ *
 *  Структура данных LinkedList (Связанный список)  *
 * ================================================ */

/**
 * Узел связанного списка
 */
class LinkedListNode {

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
 * Связанный список
 */
class LinkedList {

  /**
   * Конструктор
   */
  constructor() {
    this.head = null // голова
    this.tail = null // хвост
  }

  /**
   * Добавление в начала списка
   * Сложность: O(1)
   * @param {*} value - значение нового узла
   * @return {this}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)

    this.head = newNode

    if(!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * Добавление в конец списка
   * Сложность: O(1)
   * @param {*} value - значение нового узла
   * @return {this}
   */
  append(value) {
    const newNode = new LinkedListNode(value)

    if(!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  /**
   * Поиск узла в связанным списке
   * Сложность: O(n)
   * @param {*} value - значение для поиска
   * @return {Object|null}
   */
  find(value) {
    if(!this.head) {
      return null
    }

    let currentNode = this.head

    while (currentNode) {
      if(currentNode.value === value) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  /**
   * Вставить новый узел после уже существующего узла
   * Сложность: O(n)
   * @param {*} value - значение нового узла
   * @param {Object} prevNode - узел после которого будет ставлять новый узел
   * @return {this}
   */
  insertAfter(value, prevNode) {
    if(prevNode === null) {
      return this
    }

    const newNode = new LinkedListNode(value)

    newNode.next = prevNode.next

    prevNode.next = newNode

    if(newNode.next === null) {
      this.tail = newNode
    }

    return this
  }

  /**
   * Удаления узлов из связного списка
   * Сложность: O(n)
   * @param {*} value - значение для удаления
   * @return {Object|null}
   */
  delete(value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    while (this.head && this.head.value === value) {
      deletedNode = this.head

      this.head = this.head.next
    }

    let currentNode = this.head

    if(currentNode !== null) {
      while (currentNode.next) {
        if(currentNode.next.value === value) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if(this.tail?.value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }

  /**
   * Выводит связанный список в виде массива
   * Сложность: O(n)
   * @return {Array}
   */
  toArray() {
    const nodes = []

    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode)

      currentNode = currentNode.next
    }

    return nodes
  }

  /**
   * Выводит связанный список в виде строки
   * Сложность: O(n)
   * @return {string}
   */
  toString() {
    return this.toArray().map(node => node.toString()).toString()
  }
}

// вывод
const list = new LinkedList()

// добавить в конец
list.append('a').append('b').append('c')

// добавить в начало
list.prepend('x')


// вывести все значения списка как строку
console.log('Все значения списка до монипуляций: ', list.toString())


// найти в списке значения
console.log('Метод find: ', list.find('b'))

// удаления узлов со сзачением а
console.log('Метод delete: ', list.delete('a'))

// вставить после b узел g
console.log('Метод insertAfter: ', list.insertAfter('g',list.find('b')))


// вывести все значения списка как строку
console.log('Все значения списка после монипуляций: ', list.toString())