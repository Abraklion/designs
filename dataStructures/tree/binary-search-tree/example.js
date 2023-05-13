
/* ============================================================== *
 *  Структура данных Двоичное дерево поиска (Binary-search-tree)  *
 * ============================================================== */

/**
 * Узел
 */
class Node {

  /**
   * Конструктор
   * @param {*} value - значение узла
   */
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  /**
   * Приводит значение в строку и выводит
   * @return {string}
   */
  toString() {
    return `${this.value}`
  }
}


/**
 * Бинарное дерево
 */
class BinaryTree {

  /**
   * Конструктор
   */
  constructor() {
    this.root = null // ссылка на последний узел
  }

  /**
   * Добавляет узел
   * Сложность: O(log(n))
   * @param {*} value - значение нового узла
   * @return {void}
   */
  add(value) {
    const newNode = new Node(value)

    if(!this.root) {
      this.root = newNode

      return
    }

    let currentNode = this.root

    while (currentNode) {
      if(newNode.value < currentNode.value) {
        // добавляем в левую сторону
        if(!currentNode.left) {
          currentNode.left = newNode

          return;
        }

        currentNode = currentNode.left

      } else {
        // добавляем в правую сторону
        if(!currentNode.right) {
          currentNode.right = newNode

          return;
        }

        currentNode = currentNode.right
      }
    }

  }

  /**
   * Поиск по дереву
   * @param {*} value - значение для поиска
   * @return {Object} - узел
   */
  find(value) {
    let currentNode = this.root

    while (currentNode) {

      if(currentNode.value === value) {
        return currentNode
      }

      if(value < currentNode.value) {
        // ищем в левой ветки
        currentNode = currentNode.left

      } else {
        // ищем в правой ветки
        currentNode = currentNode.right

      }
    }

    return -1
  }

  /**
   * Обход в глубину
   * @param {Function} callback - колбэк функция
   * @param {string} method - когда вызывать колбэк
   * @return {void}
   */
  traverseDFS(callback, method) {
    if (method === 'preOrder') {
      this.preOrder(this.root, callback)
      return
    }

    if(method === 'inOrder') {
      this.inOrder(this.root, callback)
      return
    }

    this.postOrder(this.root, callback)
  }

  /**
   * Алгоритм:
   * 1) Действие с Node
   * 2) Идем по левому под дереву
   * 3) Идем по правому под дереву
   * @param {Object} node - узел
   * @param {Function} callback - колбэк функция
   * @return {void}
   */
  preOrder(node,callback) {
    if(!node) {
      return
    }

    if(callback) {
      callback(node)
    }

    this.preOrder(node.left, callback)
    this.preOrder(node.right, callback)
  }

  /**
   * Алгоритм:
   * 1) Идем по левому под дереву
   * 2) Действие с Node
   * 3) Идем по правому под дереву
   * @param {Object} node - узел
   * @param {Function} callback - колбэк функция
   * @return {void}
   */
  inOrder(node,callback) {
    if(!node) {
      return
    }

    this.inOrder(node.left, callback)

    if(callback) {
      callback(node)
    }

    this.inOrder(node.right, callback)
  }

  /**
   * Алгоритм:
   * 1) Идем по левому под дереву
   * 2) Идем по правому под дереву
   * 3) Действие с Node
   * @param {Object} node - узел
   * @param {Function} callback - колбэк функция
   * @return {void}
   */
  postOrder(node,callback) {
    if(!node) {
      return
    }

    this.postOrder(node.left, callback)
    this.postOrder(node.right, callback)

    if(callback) {
      callback(node)
    }
  }

  /**
   * Обход в ширину
   * @param {Function} callback - колбэк функция
   * @return {void}
   */
  traverseBFS(callback) {
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();

      if(callback) {
        callback(node)
      }

      if(node.left) {
        queue.push(node.left)
      }

      if(node.right) {
        queue.push(node.right)
      }
    }
  }
}


// вывод
const tree = new BinaryTree()

// наполняем дерево
tree.add(8)
tree.add(7)
tree.add(9)
tree.add(5)
tree.add(10)
tree.add(20)
tree.add(6)
tree.add(2)
tree.add(11)


// Отход в глубину

// preOrder
console.log("preOrder:")
tree.traverseDFS((node) => {
  console.log(node.value)
},'preOrder')  // ->  8 7 5 2 6 9 10 20 11

// inOrder
console.log("\ninOrder:")
tree.traverseDFS((node) => {
  console.log(node.value)
},'inOrder')  // ->  2 5 6 7 8 9 10 11 20

// postOrder
console.log("\npostOrder:")
tree.traverseDFS((node) => {
  console.log(node.value)
},'postOrder')  // ->  2 6 5 7 11 20 10 9 8

// Отход в ширину

console.log("\nОтход в ширину:")
tree.traverseBFS((node) => {
  console.log(node.value)
})  // ->  8 7 9 5 10 2 6 20 11

// Поиск
console.log("\nПоиск")
console.log(tree.find(20))

// вывести дерево
console.log("")
console.log(JSON.stringify(tree, null,4))