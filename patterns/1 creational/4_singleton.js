
/* ============================== *
 *  Паттерн Singleton (Одиночка)  *
 * ============================== */

/**
 *  Класс Database
 * */
class Database {

  /**
   * Конструктор
   * @param {string} data - база.
   */
  constructor(data) {

    // вся суть патерна в этих строчках
    if (Database.exists) {
      return Database.instance
    }

    Database.instance = this
    Database.exists = true
    // конец

    this.data = data
  }

  /**
   * Получить данные
   * @return {string}
   */
  getData() {
    return this.data
  }
}

const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySQL')
console.log(mysql.getData())


