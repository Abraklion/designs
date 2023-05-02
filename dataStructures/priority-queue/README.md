# Очередь с приоритетом `priority-queue`

Очередь с приоритетом (англ. priority queue) — абстрактный тип данных в информатике, для каждого элемента которого можно вычислить его приоритет.

В очереди с приоритетами элемент с высоким приоритетом обслуживается раньше элемента с низким приоритетом. Если два элемента имеют одинаковый приоритет, они обслуживаются в соответствии с их порядком в очереди.

Очередь с приоритетом поддерживает две обязательные операции — добавить элемент и извлечь максимум(минимум).

Хотя приоритетные очереди часто реализуются в виде куч(heaps), они концептуально отличаются от куч. Очередь приоритетов является абстрактной концепцией вроде «списка» или «карты»; так же, как список может быть реализован в виде связного списка или массива, так и очередь с приоритетом может быть реализована в виде кучи или множеством других методов, например в виде неупорядоченного массива.

### Реализация

````js
/**
 * Узел
 */
class PriorityQueueNode {

    /**
     * Конструктор
     * @param {string} name - имя
     * @param {number} priority - приоритет
     */
    constructor(name, priority = 0) {
        if(name === undefined) {
            throw new Error(`Аргумент "name" не был передан при создании экземплера класса!`)
        }
        this.name = name
        this.priority = priority
    }

    /**
     * Приводит значение в строку и выводит
     * @return {string}
     */
    toString() {
        return `${this.name}: ${this.priority}`
    }
}

/**
 * Очередь с приоритетом
 */
class PriorityQueue {

    /**
     * Конструктор
     */
    constructor() {
        this._data = []
    }

    // основные операции над очередью описаны ниже
}
````

### Код для основных операций

### `Добавить`

---

_**Enqueue**_ - добавляет узел в очередь по приоритету

````js
/**
 * Добавляет узел в очередъ по приоритету
 * Сложность: O(n)
 * @param {Object} value - новый узел
 * @return {this}
 */
enqueue(value) {
    if (typeof value !== 'object') {
        throw new Error(`Ожидаем обьект, передан ${typeof value}`)
    }

    if(value.priority === undefined) {
        throw new Error(`У обьекта отсутствует поля priority!`)
    }

    // Сначала предположим, что элемент пойдет прямо в начало массива
    let pointOfInsertion = 0;

    // Пока не встретим элемент больше вставляемого или конец массива...
    while (pointOfInsertion < this._data.length && value.priority > this._data[pointOfInsertion].priority) {
        // ... двигаем указатель на место вставки
        pointOfInsertion++;
    }

    this._data =  pointOfInsertion === 0
        ? [value, ...this._data]
        : [...this._data.slice(0, pointOfInsertion), value, ...this._data.slice(pointOfInsertion)];

    return this
}
````

### `Удалить`

_**Dequeue**_ - удалить узел из очередь по приоритету

````js
/**
 * Удалить узел из очередъ по приоритету
 * Сложность: O(1)
 * @return {Object}
 */
dequeue() {
    return this._data.pop()
}
````

### `Обход`

````js
/**
 * Список узлов в очереди по приоритету
 * Сложность: O(n)
 * @return {string}
 */
show() {
    let str = '';

    for(let i = this._data.length - 1; i >= 0; i--) {
        str += this._data[i].toString() + '\n'
    }

    return str
}
````

### `Общее`

````js
/**
 * Проверяет очередь на пустоту
 * Сложность: O(1)
 * @return {boolean}
 */
isEmpty() {
    return this._data.length === 0
}
````

````js
/**
 * Кол-во узлов в очереди
 * Сложность: O(1)
 * @return {number}
 */
size() {
    return this._data.length
}
````





