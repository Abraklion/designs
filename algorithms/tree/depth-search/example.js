
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

  // в рекурсивной функции...
  function recursive(node) {
    // ... сначала обрабатываем ноду, в которой находимся ...
    result.push(node.localName);

    // ...а потом вызываем её же на всех детях
    for (const child of node.children) {
      recursive(child);
    }
  }

  recursive(node);

  resultElement.innerHTML = result.join(' -> ');
}

// вызов
traverse(root);

