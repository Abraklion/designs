
/* =================================================== *
 *  Алгоритм Dijkstra's Algorithm (Алгоритм Дейкстры)  *
 * =================================================== */

// граф с ключем(вершиной) и значением ( обьектом с растоянием между двух вершин (ребрами с весом) )
const graph = {
  a: {b: 2, c: 1},

  b: {f: 7},

  c: {d: 5, e: 2},

  d: {f: 2},

  e: {f: 1},

  f: {g: 1},

  g: {}
}

let start = 'a',
    end = 'g'

/**
 * Поиск кратчайшего пути в графе А до В
 * @param {Object} graph - граф со всеми вершинами
 * @param {string} start - точка А (стартовая вершина)
 * @param {string} end - точка В (конечная вершина)
 */
function shortPath(graph, start, end) {
  // таблица которыя хранит кратчайшие пути(стоимость путей)
  const costs = {}

  // хранит узлы(вершины) которые мы уже проверили
  const processed = []

  // хранит соседние вершины рассматриваемого узла
  let neighbors = {}

  // заполнить все вершины до которых мы можем добраться из стартовой точки значениями,
  // а все остальные вершины заполнить бесконечно каким-то большим числом
  Object.keys(graph).forEach(node => {
    if (node !== start) {
      let value = graph[start][node]

      costs[node] = {
        value: value || 100000000,
        path : value ? [start] : []
      }
    }
  })// резульата -> {b: { value: 2, path: [ 'a' ] },
    // c: { value: 1, path: [ 'a' ] },
    // d: { value: 100000000, path: [] },
    // e: { value: 100000000, path: [] },
    // f: { value: 100000000, path: [] },
    // g: { value: 100000000, path: [] }


  // найти вершину в которую мы можем попасть из точки start(стартовой точки),
  // путь к которой самый короткий
  let node = findNodeLowestCost(costs, processed) // резульата -> c

  // запускам цикл пока все вешнины в costs не попадут processed. т.е пока необойдем весь граф
  while (node) {
    // стоимость текущий вершины
    const cost = costs[node].value
    // узлы в которые мы можем попасть их текущий вершины
    neighbors = graph[node]

    // проходимся по узлам
    Object.keys(neighbors).forEach(neighbor => {
      // новый кратчайшие пути (новая стоимость)
      let newCost = cost + neighbors[neighbor]

      // если новый кратчайшие путь(newCost) мненьше чем, кратчайшие путь который лежит в таблицы(costs), обновляем
      if (newCost < costs[neighbor].value) {
        costs[neighbor].value = newCost
        costs[neighbor].path = [...costs[node].path, node]
      }
    })

    // вершину(node) которую мы расматривали на итерации, надо добавить в массив уже обработанных вершин
    // после чего при поиски новой вершины с минимальной стоимостью эта вершина учитываться на будет
    processed.push(node)

    // найти новую вершину с самым коротким путем
    node = findNodeLowestCost(costs, processed)
  }

  // таблица результатов после обхода графа полностью
  return costs
}

/**
 * Найдти узел(вершину) с наименьшей стоимостью
 * @param {Object} costs - таблица которыя хранит кратчайшие пути
 * @param {Array} processed - хранит узлы(вершины) которые мы уже проверили
 */
function findNodeLowestCost(costs, processed) {
  // минимальные значение
  let lowestCost = 100000000

  // будет хранить узел(вершину) с минимальным значением путь
  let lowestNode;

  // проходимся по таблицы в которой хранится стоимость путей
  Object.keys(costs).forEach(node => {
    // стоимость текущий вершины
    let cost = costs[node].value

    // если стоимость текущий вершины(cost) меньше чем минимальная стоимость(lowestCost)
    // и
    // вершина которую мы расматриваем, не находится в массиве обработанных вершин(processed)
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestNode = node
    }
  })

  return lowestNode
}

// вывод
const res = shortPath(graph, start, end);

console.log(`
  Растояния от "${start}" до "${end}": ${res[end].value}. \n
  Оптимальный путь: ${res[end].path.join(' -> ')}
`)