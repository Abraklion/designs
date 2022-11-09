
/* ============================== *
 *  Паттерн Decorator (Декоратор) *
 * ============================== */

/**
 *  Класс Server - базывый класс который не должен изменятся
 * */
class Server {

  /**
   * Конструктор
   * @param {string} ip - ip.
   * @param {number} port - ip.
   */
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  /**
   * вернуть url
   */
  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

/**
 * @function aws - работает как Decorator (т.к производит мутации и возвращает мутированый обьект)
 * @param {Object} server - экземпляр класса Server
 * @return {Object}
 */
function aws(server) {
  server.isAWS = true
  server.awsInfo = function() {
    return server.url
  }

  return server
}

/**
 * @function azure - работает как Decorator (т.к производит мутации и возвращает мутированый обьект)
 * @param {Object} server - экземпляр класса Server
 * @return {Object}
 */
function azure(server) {
  server.isAzure = true
  server.port += 500

  return server
}

/**
 * @function  работает как Decorator ( озменяет объект но не возвращает его, как бы по ссылки)
 * @param {Object} server - экземпляр класса Server
 * @return {void}
 */
function microsoft(server) {
  server.isAzure = true
  server.port += 500
}

const s1 = aws(new Server('12.34.56.78', 8080))
console.log(s1.isAWS)
console.log(s1.awsInfo())

const s2 = azure(new Server('98.87.76.12', 1000))
console.log(s2.isAzure)
console.log(s2.url)

const s3 = new Server('111.111.80.90', 100)
microsoft(s3)
console.log(s3.isAzure)
console.log(s3.url)
