
/* ============================ *
 *  Паттерн Iterator (Итератор) *
 * ============================ */

/**
 *  Класс MyIterator - (1 вариант)
 * */
class MyIterator {

  /**
   * Конструктор
   * @param {Array} data - массив
   */
  constructor(data) {
    this.index = 0
    this.data = data
  }

  /**
   * Итератор
   */
  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0
          return {
            done: true,
            value: void 0
          }
        }
      }
    }
  }
}

/**
 * @function generator - (2 вариант)
 * @param {Array} collection - массив
 */
function* generator(collection) {
  let index = 0

  while (index < collection.length) {
    yield collection[index++]
  }
}

const iterator = new MyIterator(['This', 'is', 'iterator'])
const gen = generator(['This', 'is', 'iterator'])

for (const val of iterator) {
  console.log('Value iterator: ', val)
}

for (const val of gen) {
  console.log('Value gen: ', val)
}




