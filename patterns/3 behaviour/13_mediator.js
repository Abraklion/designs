
/* ============================= *
 *  Паттерн Mediator (Посредник) *
 * ============================= */

/**
 *  Класс User - содает пользователей
 * */
class User {

  /**
   * Конструктор
   * @param {string} name - имя пользователя
   */
  constructor(name) {
    this.name = name
    this.room = null
  }

  /**
   * отправить сообщения
   * @param {string} message - текст сообщения
   * @param {Object=} to - кому отправить
   * @returns {void}
   */
  send(message, to) {
    this.room.send(message, this, to)
  }

  /**
   * получить ответ
   * @param {string} message - текст сообщения
   * @param {Object} from - кто отправил
   * @returns {void}
   */
  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

/**
 *  Класс ChatRoom - чат (посредник)
 * */
class ChatRoom {

  /**
   * Конструктор
   */
  constructor() {
    this.users = {}
  }

  /**
   * регистрация пользователя в чате
   * @param {Object} user - имя пользователя
   * @returns {void}
   */
  register(user) {
    this.users[user.name] = user
    user.room = this
  }

  /**
   * отправка сообщения
   * @param {string} message - текст сообщения
   * @param {Object} from - от кого
   * @param {Object} to - кому
   * @returns {void}
   */
  send(message, from, to) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const vlad = new User('Vladilen')
const lena = new User('Elena')
const igor = new User('Igor')

const room = new ChatRoom()

room.register(vlad)
room.register(lena)
room.register(igor)

vlad.send('Hello!', lena)
lena.send('Hello hello!', vlad)
igor.send('Vsem privet')
