
/* ======================================= *
 *  Алгоритм BFS (Поиск в ширину) в графе  *
 * ======================================= */

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

/**
 * Можно ли из точки A(start) дойти до точки B(end) в графе
 * @param {Object} graph - граф
 * @param {string} start - стартовая точка
 * @param {string} end - конечная точка
 */
function breadthSearch(graph, start, end) {

  // очередь для просмотра вершин
  let queue = []

  // куда мы сразу же кладем вершину, с которой будем начинать обход
  queue.push(start)

  // обходим, пока в очереди что-то есть
  while (queue.length > 0) {

    // получаем вершину из списка
    const current = queue.shift()

    // если в графе нет такой вершины добавляем
    if (!graph[current]) {
      graph[current] = []
    }

    // если из вершины есть путь в конечный точки возвращает истину
    if (graph[current].includes(end)) {
      return true
      // иначе кладем в очередь все вершины, нашей выршины
    } else {
      queue = [...queue, ...graph[current]]
    }
  }

  return false
}

// вывод
console.log(breadthSearch(graph, 'a', 'e'))

