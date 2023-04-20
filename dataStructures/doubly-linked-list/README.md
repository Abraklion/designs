# Двусвязный список `doubly-linked-list`

Двусвязный список — связная структура данных в информатике, состоящая из набора последовательно связанных записей, называемых узлами. Каждый узел содержит два поля, называемых ссылками, которые указывают на предыдущий и последующий элементы в последовательности узлов. Ссылка на предыдущий элемент корневого узла и ссылка на последующий элемент последнего узла указывают на некого рода прерыватель, обычно сторожевой узел или null, для облегчения обхода списка. Если в списке только один сторожевой узел, тогда список циклически связан через него. Двусвязный список можно представить, как два связных списка, которые образованы из одних и тех же данных, но расположенных в противоположном порядке.

![Поиск в ширину](./img1.jpeg)

Две ссылки позволяют обходить список в обоих направлениях. Добавление и удаление узла в двусвязном списке требует изменения большего количества ссылок, чем аналогичные операции в связном списке. Однако данные операции проще и потенциально более эффективны (для некорневых узлов) - при обходе не нужно следить за предыдущим узлом или повторно обходить список в поиске предыдущего узла, плюс его ссылка может быть изменена.

### Реализация

````js
/**
 * Узел связанного списка
 */
class DoublyLinkedListNode {

  /**
   * Конструктор
   * @param {*} value - значение узла
   * @param {Object|null=} prev - указатель на предыдущий узел
   * @param {Object|null=} next - указатель на следующий узел
   */
  constructor(value, prev = null, next = null) {
    this.value = value
    this.prev = prev
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
 * Двунаправленный связанный список
 */
class DoublyLinkedList {

  /**
   * Конструктор
   */
  constructor() {
    this.head = null // голова
    this.tail = null // хвост
  }

  // основные операции над списком описаны ниже
}

````

### Код для основных операций

### `Добавить`

---

_**Prepend**_ - добавление в начала списка

````js
  /**
 * Добавление в начала списка
 * Сложность: O(1)
 * @param {*} value - значение нового узла
 * @return {this}
 */
prepend(value) {
  const newNode = new DoublyLinkedListNode(value, null , this.head)

  if (this.head) {
    this.head.prev = newNode
  }

  this.head = newNode

  if(!this.tail) {
    this.tail = newNode
  }

  return this
}
````

_**Append**_ - добавление в конец списка

````js
  /**
 * Добавление в конец списка
 * Сложность: O(1)
 * @param {*} value - значение нового узла
 * @return {this}
 */
append(value) {
  const newNode = new DoublyLinkedListNode(value, this.tail)

  if(!this.head || !this.tail) {
    this.head = newNode
    this.tail = newNode

    return this
  }

  this.tail.next = newNode
  this.tail = newNode

  return this
}
````

_**InsertAfter**_ - добавить новый узел после уже существующего узла

````js
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

  const newNode = new DoublyLinkedListNode(value, prevNode, prevNode.next)

  if(prevNode.next) {
    prevNode.next.prev = newNode
  }

  prevNode.next = newNode

  if(newNode.next === null) {
    this.tail = newNode
  }

  return this
}
````

### `Поиск`

---

_**Find**_ - Поиск узла в связанным списке

````js
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
````

### `Удалить`

---

_**Delete**_ - удаления узлов из связного списка

````js
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

    if(this.head) {
      this.head.prev = null
    }
  }

  let currentNode = this.head

  if(currentNode !== null) {
    while (currentNode.next) {
      if(currentNode.next.value === value) {
        deletedNode = currentNode.next

        if(currentNode.next.next) {
          currentNode.next.next.prev = currentNode
        }

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
````

### `Обход`

---

````js
/**
 * Выводит связанный список в виде массива
 * Сложность: O(n)
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
````

````js
/**
 * Выводит связанный список в виде строки
 * Сложность: O(n)
 */
toString() {
  return this.toArray().map(node => node.toString()).toString()
}
````






