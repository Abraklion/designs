
/* ======================================== *
 *  Алгоритм BinarySearch (Двоичный поиск)  *
 * ======================================== */

/* ======================================== *
 *                 Пример 1                 *
 * ======================================== */

const plants = ["Аспарагус", "Гвоздика", "Жасмин", "Калина", "Малина", "Пион", "Тысячелистник", "Хризантема", "Шафран", "Юкка"]

/**
 * Найти индекс по значению в массиве.
 * @param {Array} plants - список.
 * @param {string} target - значения которое надо найти.
 */
function binarySearch(plants, target) {
  let left = 0;
  let right = plants.length - 1;

  while (left <= right) {
    const center = Math.floor((right + left) / 2);

    if (plants[center] === target) {
      return center;
    }

    // Если то, что мы ищем, левее по алфавиту, идем искать в левую часть массива
    if (plants[center].localeCompare(target) === 1) {
      right = center - 1;
      // иначе идем в другую сторону
    } else {
      left = center + 1;
    }
  }

  return null;
}

// вызов
console.log(binarySearch(plants, "Пион")); // => 5
console.log(binarySearch(plants, "Роза")); // => null
console.log(binarySearch(plants, "Аспарагус")); // => 0


/* ======================================== *
 *         Пример 2 (рекурсивно)            *
 * ======================================== */

/**
 * Пристствует элемент в массиве или нет (рекурсивно)
 * @param {Array} array - список.
 * @param {number} element - значения которое надо найти.
 */
function binarySearch2(array, element) {
  if (array.length === 0) {
    return false;
  }

  if (array.length === 1) {
    return array[0] === element;
  }

  const middle = Math.floor(array.length / 2);

  if (array[middle] === element) {
    return true;
  }

  if (array[middle] > element) {
    return binarySearch2(array.slice(0, middle), element)
  }

  return binarySearch2(array.slice(middle + 1), element)
}

// вызов
console.log(binarySearch2([], 3)); // => false
console.log(binarySearch2([3], 3)); // => true
console.log(binarySearch2([1, 2, 3, 4, 5], 4)); // => true
console.log(binarySearch2([1, 2, 3, 5, 6], 4)); // => false

