# Поиск в ширину `BFS`

Поиск в ширину (BFS) — это алгоритм обхода или поиска древовидных или графовых структур данных. Он начинается с корня дерева (или некоторого произвольного узла графа, иногда называемого «ключом поиска») и сначала исследует соседние узлы, прежде чем перейти к соседям следующего уровня.

![Поиск в ширину](./img.gif)


## Примеры

- [Пример 1 - реализация поиска в ширину](#Пример-1)
- [Пример 2 - красим списки](#Пример-2)

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

_Не бойтесь слова поиск: так исторически сложилось, что алгоритм, который раньше искал элементы в дереве, может просто обходить и модифицировать дерево, но ничего там не искать. Его суть довольно проста: мы сначала просматриваем все элементы на одном уровне вложенности, а затем переходим на следующий и следующий, пока не обойдём всё. Этот алгоритм хорошо подходит для поиска, если вы знаете, что искомый элемент, скорее всего, лежит «сверху» и есть основания полагать, что дерево довольно широкое._

````js
const root = document.body;
const resultElement = document.getElementById('result');

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

traverse(root);
````

### Пример 2

### `Шаг 1`

_Перед тем, как перейти непосредственно к окраске, немного подготовимся: возьмём ноду с корнем списка из DOM и перенесём список цветов._

````js
const root = document.getElementById('root');
const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];
````

### `Шаг 2`

_Для начала напишем обычный обход дерева в ширину и попробуем окрасить список в случайные цвета, чтобы убедиться, что все ноды действительно обходятся. Теперь список выглядит слишком пёстро и несуразно, возможно, из технологов плохие дизайнеры..._

````js
const root = document.getElementById('root');
const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];

function color(node) {
  // та же очередь для просмотра нод
  const queue = [];

  queue.push(node);

  // обходим все ноды из списка
  while(queue.length) {
    // получаем ноду из списка
    const currentNode = queue.shift();

    // красим её
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    currentNode.style.backgroundColor = colors[randomColorIndex];

    // и кладем в очередь всех потомков
    queue.push(...currentNode.children);
  }
}

color(root);
````

### `Шаг 3`

_Нетрудно заметить, что мы красим не только li, как нам надо по условию задания, но и вообще все элементы! Исправим это._

````js
const root = document.getElementById('root');
const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];
const elementToStyle = 'LI';

function color(node) {
  // та же очередь для просмотра нод
  const queue = [];

  queue.push(node);

  // обходим все ноды из списка
  while(queue.length) {
    // получаем ноду из списка
    const currentNode = queue.shift();

    // если это нода, которую нам нужно красить ...
    if (currentNode.tagName === elementToStyle) {
      // ... красим её
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      currentNode.style.backgroundColor = colors[randomColorIndex];
    }

    // и кладем в очередь всех потомков
    queue.push(...currentNode.children);
  }
}

color(root);
````

### `Шаг 4`

_А теперь надо как-то понять, на каком уровне вложенности мы находимся. Самый простой способ это сделать — просто присвоить эту информацию прямо в элемент очереди! Тогда во время добавления новых элементов в очередь, если мы дошли до новой вложенности (встретили li), будем ставить им вложенность в текущая + 1._

````js
const root = document.getElementById('root');
const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];
const elementToStyle = 'LI';

function color(node) {
  // та же очередь для просмотра нод
  const queue = [];

  queue.push({
    node,
    depth: 0,
  });

  // обходим все ноды из списка
  while(queue.length) {
    // получаем ноду из списка
    const {node: currentNode, depth: currentDepth} = queue.shift();
    const isStylable = currentNode.tagName === elementToStyle

    // если это нода, которую нам нужно красить ...
    if (isStylable) {
      // ... красим её
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      currentNode.style.backgroundColor = colors[randomColorIndex];
    }


    // и кладем в очередь всех потомков с обновленной глубиной
    for (const node of currentNode.children) {
      queue.push({
        node,
        depth: isStylable ? currentDepth + 1 : currentDepth,
      })
    }
  }
}

color(root);
````

### `Шаг 5`

_Теперь осталось только красить в цвет подстать глубине._

````js
const root = document.getElementById('root');
const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];
const elementToStyle = 'LI';

function color(node) {
  // та же очередь для просмотра нод
  const queue = [];

  queue.push({
    node,
    depth: 0,
  });

  // обходим все ноды из списка
  while(queue.length) {
    // получаем ноду из списка
    const {node: currentNode, depth: currentDepth} = queue.shift();
    const isStylable = currentNode.tagName === elementToStyle

    // если это нода, которую нам нужно красить ...
    if (isStylable) {
      // ... красим её
      currentNode.style.backgroundColor = colors[currentDepth];
    }


    // и кладем в очередь всех потомков с обновленной глубиной
    for (const node of currentNode.children) {
      queue.push({
        node,
        depth: isStylable ? currentDepth + 1 : currentDepth,
      })
    }
  }
}

color(root);
````

### `Шаг 6`

_И конечно, не забыть обработать случай вложенности больше трёх!_

````js
const root = document.getElementById('root');
const colors = ['#DCD6F7', '#A6B1E1', '#B4869F'];
const elementToStyle = 'LI';

function color(node) {
  // та же очередь для просмотра нод
  const queue = [];

  queue.push({
    node,
    depth: 0,
  });

  // обходим все ноды из списка
  while(queue.length) {
    // получаем ноду из списка
    const {node: currentNode, depth: currentDepth} = queue.shift();
    const isStylable = currentNode.tagName === elementToStyle

    // если это нода, которую нам нужно красить ...
    if (isStylable) {
      // ... красим её
      currentNode.style.backgroundColor = colors[currentDepth % 3];
    }


    // и кладем в очередь всех потомков с обновленной глубиной
    for (const node of currentNode.children) {
      queue.push({
        node,
        depth: isStylable ? currentDepth + 1 : currentDepth,
      })
    }
  }
}

color(root);
````










