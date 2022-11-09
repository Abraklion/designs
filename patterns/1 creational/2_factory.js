
/* =========================== *
 *  Паттерн Factory (Фабрика)  *
 * =========================== */

/**
 *  Класс SimpleMembership для подписки Simple
 * */
class SimpleMembership {

  /**
   * Конструктор
   * @param {string} name - имя.
   */
  constructor(name) {
    this.name = name
    this.cost = 50
  }
}

/**
 *  Класс StandardMembership для подписки Standard
 * */
class StandardMembership {

  /**
   * Конструктор
   * @param {string} name - имя.
   */
  constructor(name) {
    this.name = name
    this.cost = 150
  }
}

/**
 *  Класс PremiumMembership для подписки Premium
 * */
class PremiumMembership {

  /**
   * Конструктор
   * @param {string} name - имя.
   */
  constructor(name) {
    this.name = name
    this.cost = 500
  }
}

/**
 *  Класс Factory (Фабрика)
 * */
class MemberFactory {

  /**
   *  Список подписок
   *  @return {Object}
   */
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  /**
   * Выводим url
   * @param {string} name - имя
   * @param {string} type - тип подписки
   * @return {Class|Object}
   */
  create(name, type = 'simple') {

    // достаем нужный нам класс из списка и делаем экземпляр на эго основе
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple
    const member = new Membership(name)

    // производим мутации
    member.type = type
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }

    return member
  }
}


const factory = new MemberFactory()

const members = [
  factory.create('Vladilen', 'simple'),
  factory.create('Elena', 'premium'),
  factory.create('Vasilisa', 'standard'),
  factory.create('Ivan', 'premium'),
  factory.create('Petr')
]

members.forEach(m => {
  m.define()
})
