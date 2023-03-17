
/* =========================================== *
 *  Алгоритм BubbleSort (Сортировка пузырьком) *
 * =========================================== */

/* =========================================== *
 *                 Пример 1                    *
 * =========================================== */

/**
 * Реализация сортировки пузырьком
 * @param {Array} array - список
 */
function insetionSort(array) {

  // проходимся по всему массиву который надо отсортировать, минус последний элемент
  for (let i = 0; i < array.length - 1; i++) {

    // следующий индекс в итерации(исходный последовательность)
    let j = i + 1

    // если следующий элемент в итерации(исх. послед-ти), меньше чем текущий элемент в итерации(готовый последовательности)
    // запускаем цикл что бы найти место для этого элемента в готовый последовательность
    while (j !== 0 && array[j] < array[j - 1]) {

      // ... меняем их местами
      [array[j], array[j - 1]] = [array[j - 1], array[j]];

      // уменьшаем индекс
      j--
    }

  }

  return array;
}

// вызов
console.log(`Пример 1: \n`, insetionSort([56, 87, 18, 92, 42, 31, 44, 82, 36, 91, 56, 87, 18, 92, 42, 31, 44, 82, 36, 91, 56, 87, 18, 92, 42, 31, 44, 82, 36, 91, 56, 87, 18, 92, 42, 31, 44, 82, 36, 91]),`\n`);


/* =========================================== *
 *                 Пример 2                    *
 * =========================================== */

/**
 * Реализация сортировки пузырьком
 * @param {Array} array - список уже отсортивованыых акции
 * @param {Object} element - подгружаемая акция
 */
function sortPush(array, element) {
  // Сначала предположим, что элемент пойдет прямо в начало массива
  let pointOfInsertion = 0;

  // Пока не встретим элемент больше вставляемого или конец массива...
  while (pointOfInsertion < array.length && element.price > array[pointOfInsertion].price) {
    // ... двигаем указатель на место вставки
    pointOfInsertion++;
  }

  return pointOfInsertion === 0
    ? [element, ...array]
    : [...array.slice(0, pointOfInsertion), element, ...array.slice(pointOfInsertion)];

  //
  // не изменяют родителя, а просто возвращают его в ином представлении
  //
  // for(let j = array.length; j > pointOfInsertion; j--) {
  //
  //   array[j] = array[j - 1]
  //
  // }
  //
  // array[pointOfInsertion] = element
  //
  // return array
}

// Список из заранее загруженных данных
const data = [
  {
    ticker: 'WISH',
    price: 5.14
  },
  {
    ticker: 'SPCE',
    price: 20.10
  },
  {
    ticker: 'AAPL',
    price: 151.86
  },
  {
    ticker: 'QCOM',
    price: 155.98,
  },
  {
    ticker: 'ABNB',
    price: 178.06,
  }
];

const loaded = {
  ticker: 'BABA',
  price: 166.99
}

// вызов
console.log(`Пример 2: \n`, sortPush(data,loaded));