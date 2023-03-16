
/* ======================================== *
 *  Алгоритм Quicksort (Быстрая сортировка) *
 * ======================================== */

let count = 0

/* ======================================== *
 *                 Пример 1                 *
 * ======================================== */

/**
 * Реализация быстрой сортировки
 * @param {Array} array - список
 */
function quickSort(array) {

  // если в массиве 1 или меньше элемент возвращаем этот массив
  if (array.length <= 1) {
    return array
  }

  // находим опорную точку
  let pivotIndex = Math.floor(array.length / 2),
      pivot = array[pivotIndex]

  // сохраняем числа меньше чем опорное число
  let less = []

  // сохраняем числа больше чем опорное число
  let greater = []

  // сохраняем числа равные опорному числу
  let equally = [pivot]

  for(let i = 0; i < array.length; i++) {
    // если номер текущий итерации равен индексу опорный точки, пропускаем
    if(i === pivotIndex) {
      continue
    }

    // если текущий элемент итерации равет опорный точки
    if(array[i] === pivot) {

      // добавлием в центр
      equally.push(array[i])

      // если текущий элемент итерации меньше чем опорная точка
    } else if(array[i] < pivot) {

      // добавлляем в левую сторону
      less.push(array[i])

      // иначе если текущий элемент итерации больше чем опорная точка
    } else {

      // добавлляем в правую сторону
      greater.push(array[i])

    }
  }

  count++

            // левая часть                         // правая часть
  return [...quickSort(less), ...equally, ...quickSort(greater)];
}

console.log(quickSort([56, 87, 18, 92, 42, 31, 44, 82, 36, 91, 56, 87, 18, 92, 42, 31, 44, 82, 36, 91, 56, 87, 18, 92, 42, 31, 44, 82, 36, 91, 56, 87, 18, 92, 42, 31, 44, 82, 36, 91]))

console.log(`Количество итераций: ` + count)
