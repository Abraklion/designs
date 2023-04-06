
/* ========================================= *
 *  Алгоритм MergeSort (Сортировка слиянием) *
 * ========================================= */

/* ======================================== *
 *                 Пример 1                 *
 * ======================================== */

/**
 * Вспомогательная функция сливает два массива
 * @param {Array} leftArr - левый массив
 * @param {Array} rightArr - правый массив
 */
const merging = (leftArr,rightArr) => {
  const result = []

  // пока у левой и правой части массива есть длина
  while (leftArr.length && rightArr.length) {
    if(leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }

  // пока у левой части массива есть длина
  while (leftArr.length ) {
    result.push(leftArr.shift())
  }

  // пока у правой части массива есть длина
  while (rightArr.length) {
    result.push(rightArr.shift())
  }

  return result
}

/**
 * Реализация сортировки слиянием
 * @param {Array} array - список
 */
function mergeSort(array) {

  // если в массиве 1 или меньше элемент возвращаем этот массив
  if (array.length <= 1) {
    return array
  }

  // находим центр
  let mid = Math.floor(array.length / 2);

  // делим массив на две части ЛЕВАЯ
  let left = array.slice(0,mid)

  // и ПРАВАЯ
  let right = array.slice(mid,array.length)

  // сливаем левую и правую часть
  return merging(mergeSort(left),mergeSort(right))

}

// вызов
console.log(mergeSort([1,2,43,21,5,56,45,46,65,54,3,8,24,78,6]))




