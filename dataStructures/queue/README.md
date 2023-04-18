# Очередь `queue`

Очередь (англ. queue) - структура данных в информатике, в которой элементы хранятся в порядке их добавления. Добавление новых элементов(enqueue) осуществляется в конец списка. А удаление элементов (dequeue) осуществляется с начала. Таким образом очередь реализует принцип "первым вошёл - первым вышел" (FIFO). Часто реализуется операция чтения головного элемента (peek), которая возвращает первый в очереди элемент, при этом не удаляя его. Очередь является примером линейной структуры данных или последовательной коллекции.

Иллюстрация работы с очередью.

![Стек](./img.jpeg)

### Реализация

````js
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
    this.lenght = 0  // длина списка 
  }

  // основные операции над списком описаны ниже
}
````

### Код для основных операций

### `Добавить`

---

_**Push**_ - добавляет узел в конец списка

````js
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
````

### `Удалить`

_**Shift**_ - удаляет из списка первый добавленный узел и возвращает его значение

````js
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
````





