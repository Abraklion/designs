/* ========================================= *
 *  Структура данных Хэш таблица (HashTable) *
 * ========================================= */

/**
 * Хэш таблица
 */
function HashTable(size = 13) {
  const _store = [];
  const _size = size;

  /**
   * Хэш функция
   * @param {*} value - ключ
   * @return {number}
   */
  function hash(value) {
    let string = String(value),
        index = 0;

    for(let i = 0; i < string.length; i++) {
      index += string.charCodeAt(i) * (i+1);
    }

    return index % _size;
  }

  /**
   * Поиск нужного индекса в массиве по ключу
   * @param {*} list - список
   * @param {string} key - ключ
   * @return {number}
   */
  function findMatchingIndex(list, key) {
    for(let i = 0; i < list.length; i++) {
      if(list[i][0] === key) return i;
    }
  }

  //замыкания
  return {

    /**
     * Записывает по ключу
     * @param {*} key - ключ
     * @param {*} value - значение
     * @return {void}
     */
    setElement(key, value) {
      if(!key) {
        throw new Error('Некорректный ключ!')
      }

      const index = hash(key);

      if(!_store[index]) {

        _store[index] = [
          [key, value]
        ];

      } else {

        const list = _store[index];
        const matchingIndex = findMatchingIndex(list, key);

        if(matchingIndex || matchingIndex === 0) {
          list[matchingIndex] = [key, value];
          return;
        }

        list.push([key, value]);
      }
    },

    /**
     * Возвращает значение по ключу
     * @param {*} key - ключ
     * @return {*}
     */
    getElement(key) {
      const index = hash(key);

      if(_store[index]) {

        const list = _store[index];

        const matchingIndex = findMatchingIndex(list, key);

        if(matchingIndex || matchingIndex === 0) return list[matchingIndex][1];
      }
    },

    /**
     * Возвращает xэш таблицу
     * @return {Array}
     */
    dump() {
      return _store;
    }
  }
}

// вывод
const hashTable = new HashTable();

let a = {name: "Вася"}
let b = 21

hashTable.setElement("boroda", "Boroda");
hashTable.setElement("winderton", "winderton");
hashTable.setElement("soer", "soer");

hashTable.setElement(a, "Вася");
hashTable.setElement(b, "петя");

console.log(hashTable.getElement(a));
console.log(hashTable.getElement(b));

console.log(hashTable.dump());