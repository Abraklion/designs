
/* ================================== *
 *  Паттерн Constructor (Конструктор) *
 * ================================== */

/**
 *  ES5
 * */

/**
 * Конструктор, использовать через new ServerES5.
 * @class ServerES5
 * @param {string} name - имя.
 * @param {string} ip - ip.
 */
function ServerES5(name, ip) {
  this.name = name
  this.ip = ip
}

/**
 * Выводим url
 * @method
 * @name getUrl
 * @return {string}
 */
ServerES5.prototype.getUrl = function() {
  return `https://${this.ip}:80`
}


const resES5 = new ServerES5('AWS German', '82.21.21.32')

console.log(resES5.getUrl())

// ======================================================================== //


/**
 *  ES6
 * */

/**
 *  Класс ServerES6
 * */
class ServerES6 {

  /**
   * Конструктор
   * @param {string} name - имя.
   * @param {string} ip - ip.
   */
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }

  /**
   * Выводим url.
   * @return {string}
   */
  getUrl() {
    return `https://${this.ip}:80`
  }

}

const resES6 = new ServerES6('AWS German', '82.21.21.32')

console.log(resES6.getUrl())
