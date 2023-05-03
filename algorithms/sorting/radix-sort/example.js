
/* ============================================ *
 *  Алгоритм RadixSort (Поразрядная сортировка) *
 * ============================================ */

/* ========================================================= *
 *  Структура данных Очередь нужны для реализации radixSort  *
 * ========================================================= */

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


/**
 * Реализация поразрядная сортировка
 * @param {Array} array - список
 */
function radixSort(array) {

  let position = Array(10).fill(0).map(value => new Queue()),
      multiplier = 1,
      maxValue = Math.max(...array)

  while(maxValue-multiplier >= 0) {
    array.forEach( value => {
          let slice = Math.floor(value/multiplier);

          position[slice % 10].push(value);
    })

    let indexValue = 0;

    position.forEach(queue => {
      while (queue.lenght > 0)  {
          array[indexValue] = queue.shift();

          indexValue++;
      }

    })

    multiplier*=10;
  }

  return array;

}

// вывод
console.log(radixSort([34,65,23,1,35,7,43,3,212,56,889,2,34,6,799]))