
/* ====================================================== *
 *  Паттерн Decorator (Декоратор) - функциональный подход *
 * ====================================================== */

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
 * @function - работает как Decorator ( озменяет объект но не возвращает его, как бы по ссылки)
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

console.log(`=======================================`)


/* ================================================= *
 *  Паттерн Decorator (Декоратор) - классовый подход *
 * ================================================= */

/**
 *  Класс Car - базывый класс который не должен изменятся
 * */
class Car {

  constructor() {
    this.price = 10000;
    this.model = 'Car'
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model
  }
}

/**
 *  Класс Tesla
 *  @extends Car
 * */
class Tesla extends Car {

  constructor() {
    super();
    this.price = 25000;
    this.model = 'Tesla';
  }
}

/**
 *  Класс Audi
 *  @extends Car
 * */
class Audi extends Car {

  constructor() {
    super();
    this.price = 20000;
    this.model = 'Audi';
  }
}

/**
 *  Класс Autopilot - работает как Decorator
 * */
class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
}

/**
 *  Класс Parktronic - работает как Decorator
 * */
class Parktronic {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`;
  }
}

let tesla = new Tesla()
tesla = new Autopilot(tesla)
tesla = new Parktronic(tesla)

console.log(tesla.getPrice(),tesla.getDescription())


let audi = new Audi()
audi = new Autopilot(audi)

console.log(audi.getPrice(),audi.getDescription())