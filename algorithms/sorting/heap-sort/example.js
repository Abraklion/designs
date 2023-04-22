
/* ====================================== *
 *  Алгоритм HarpSort (Сортировка кучей)  *
 * ====================================== */

/* =========================================== *
 *                 Пример 1                    *
 * =========================================== */

/**
 * Реализация Сортировка кучей (минимальная куча)
 */
class MinHeap
{

  /**
   * Конструктор
   * @param {Array} array - список
   */
  constructor(array) {

    this.heap = [null] // куча

    this.sorted = [] // сортирования куча

    // формеруем кучу из исходных данных
    while(array.length > 0)
    {
      this.insert(array.pop());
    }
  }

  /**
   * Добавления новый узел в кучу
   * @param {*} node - список
   * @return {void}
   */
  insert(node) {

    // вставка нового узла в конец массива кучи
    this.heap.push(node)

    let current = this.heap.length - 1

    // поиск правильной позиции для нового узла

    // Переход вверх по родительскому узлу до тех пор, пока текущий узел (current) не станет больше родительского (current/2)
    while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {

      // Замена двух узлов с помощью синтаксиса деструктурирования ES6
      [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]

      current = Math.floor(current/2)
    }

  }

  /**
   * Удалить минимальный узел
   * @return {*} - узел с минимальным значением
   */
  remove() {
    // Наименьший элемент находится с индексом 1 в массиве кучи
    let smallest = this.heap[1]

    // Когда в массиве больше двух элементов, мы помещаем самый правый элемент в первую позицию
    // и начинаем сравнивать узлы с дочерним узлом
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length-1]
      this.heap.splice(this.heap.length - 1)

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
        }
        return smallest
      }

      let current = 1
      let leftChildIndex = current * 2
      let rightChildIndex = current * 2 + 1

      while (this.heap[leftChildIndex] && this.heap[rightChildIndex] &&
        (this.heap[current] > this.heap[leftChildIndex] || this.heap[current] > this.heap[rightChildIndex])) {

        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
          current = leftChildIndex
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
          current = rightChildIndex
        }

        leftChildIndex = current * 2
        rightChildIndex = current * 2 + 1
      }

      if (this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] < this.heap[current]) {
        [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
      }
    }
    // Если в массиве есть только два элемента, мы непосредственно выделяем первый элемент
    else if (this.heap.length === 2) {

      this.heap.splice(1, 1)

    } else {

      return null

    }

    return smallest
  }

  /**
   * Пирамидальная сортировка (сортировка кучей)
   * @return {Array} - массив отсортированный по возростанию
   */
  sort() {
    while( this.heap.length > 1 ) {
      let value = this.remove(1)

      this.sorted.push(value)
    }

    return this.sorted
  }
}

//вывод

// сортировка по принцепу минимальной кучи
let minHeap = new MinHeap([5,7,9,4,3,8,3,1,0,3]);

console.log(`Экземпляр минимальный кучи:`)
console.log(minHeap)

console.log(`Сортировка минимальный кучи:`)
console.log(minHeap.sort())


/* =========================================== *
 *                 Пример 2                    *
 * =========================================== */

/**
 * Реализация Сортировка кучей (максимальная куча)
 */
class MaxHeap
{

  /**
   * Конструктор
   * @param {Array} array - список
   */
  constructor(array) {

    this.heap = [null] // куча

    this.sorted = [] // сортирования куча

    // формеруем кучу из исходных данных
    while(array.length > 0)
    {
      this.insert(array.pop());
    }
  }

  /**
   * Добавления новый узел в кучу
   * @param {*} node - список
   * @return {void}
   */
  insert(node) {

    // вставка нового узла в конец массива кучи
    this.heap.push(node)

    let current = this.heap.length - 1

    // поиск правильной позиции для нового узла

    // Переход вверх по родительскому узлу до тех пор, пока текущий узел (current) не станет меньше родительского (current/2)
    while (current > 1 && this.heap[Math.floor(current/2)] < this.heap[current]) {

      // Замена двух узлов с помощью синтаксиса деструктурирования ES6
      [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]

      current = Math.floor(current/2)
    }

  }

  /**
   * Удалить максимальный узел
   * @return {*} - узел с максимальм значением
   */
  remove() {
    // Наименьший элемент находится с индексом 1 в массиве кучи
    let smallest = this.heap[1]

    // Когда в массиве больше двух элементов, мы помещаем самый правый элемент в первую позицию
    // и начинаем сравнивать узлы с дочерним узлом
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length-1]
      this.heap.splice(this.heap.length - 1)

      if (this.heap.length === 3) {
        if (this.heap[1] < this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
        }
        return smallest
      }

      let current = 1
      let leftChildIndex = current * 2
      let rightChildIndex = current * 2 + 1

      while (this.heap[leftChildIndex] && this.heap[rightChildIndex] &&
      (this.heap[current] < this.heap[leftChildIndex] || this.heap[current] < this.heap[rightChildIndex])) {

        if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
          current = leftChildIndex
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
          current = rightChildIndex
        }

        leftChildIndex = current * 2
        rightChildIndex = current * 2 + 1
      }

      if (this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] > this.heap[current]) {
        [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
      }
    }
    // Если в массиве есть только два элемента, мы непосредственно выделяем первый элемент
    else if (this.heap.length === 2) {

      this.heap.splice(1, 1)

    } else {

      return null

    }

    return smallest
  }

  /**
   * Пирамидальная сортировка (сортировка кучей)
   * @return {Array} - массив отсортированный по убыванию
   */
  sort() {
    while( this.heap.length > 1 ) {
      let value = this.remove(1)

      this.sorted.push(value)
    }

    return this.sorted
  }
}


//вывод

// сортировка по принцепу максимальной кучи
let maxHeap = new MaxHeap([5,7,9,4,3,8,3,1,0,3]);

console.log(`Экземпляр максимальной кучи:`)
console.log(maxHeap)

console.log(`Сортировка максимальной кучи:`)
console.log(maxHeap.sort())