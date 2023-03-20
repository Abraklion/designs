# Поиск в глубину `DFS`

Поиск в глубину (DFS) — это алгоритм обхода или поиска древовидных или графовых структур данных. Начинают с корня (выбирая какой-нибудь произвольный узел в качестве корня в случае графа) и исследуют как можно дальше каждую ветвь, прежде чем возвращаться назад.

![Поиск в глубину](./img.gif)


## Примеры

- [Пример 1 - реализация поиска в глубину](#Пример-1)

---

### Пример 1

### `Шаг 1`

_Заготовка_

````js
const root = document.body;
const resultElement = document.getElementById('result');

function traverse(node) {
  const result = [];

  resultElement.innerHTML = result.join(' -> ');
}

traverse(root);
````

### `Шаг 2`

_В отличие от обхода в ширину, этот метод подойдет, если вы подозреваете, что нужный элемент находится внизу дерева и оно «узкое». Но если ваша цель — полностью обойти дерево, то этот способ по производительности ровно такой же, как и предыдущий. Этот способ является рекурсивным. Мы сначала обработаем ноду, на которой находимся , а затем рекурсивно вызовем операцию обхода на всех потомках._

````js
const root = document.body;
const resultElement = document.getElementById('result');

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

traverse(root);
````










