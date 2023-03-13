
/* ======================================== *
 *  Алгоритм LinearSearch (Линейный поиск)  *
 * ======================================== */

const array = [1, 10, 12, 13, 14, 15, 17, 19, 3, 5, 6, 9]


/**
 * Найти индекс по значению в массиве.
 * @param {Array} array - список.
 * @param {number} target - значения которое надо найти.
 */
function linearSearch(array, target) {

  for (let i = 0; i < array.length; i++) {

    if(array[i] === target) {
      return i
    }

  }

  return -1
}

// вызов
console.log(linearSearch(array, 12))

