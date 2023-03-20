
/* ============================== *
 *  Алгоритм BFS (Поиск в ширину) *
 * ============================== */

/* ============================== *
 *            Пример 1            *
 * ============================== */

const root = document.querySelector('.main'),
      resultElement = document.getElementById('result');

/**
 * Реализация поиска в ширину
 * @param {Node} node - список
 */
function traverse(node) {
  const result = [];

  // очередь для просмотра нод
  const queue = [];

  // куда мы сразу же кладем ноду, с которой будем начинать обход
  queue.push(node);

  // обходим, пока в очереди что-то есть
  while(queue.length) {
    // получаем ноду из списка
    const currentNode = queue.shift();

    // делаем всё, что нужно с нашей нодой (сейчас это просто перекладывание ноды в список просмотренных)
    result.push(currentNode.localName);

    // и кладем в очередь всех потомков нашей ноды.
    // из-за того, что мы будем класть потомков в конец и доставать из начала, мы гарантированно просмотрим все ноды текущего уровня перед спуском на следующий
    queue.push(...currentNode.children);
  }

  resultElement.innerHTML = result.join(' -> ');
}

// вызов
traverse(root);

