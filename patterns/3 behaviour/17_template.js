
/* ========================== *
 *  Паттерн Template (Шаблон) *
 * ========================== */

/**
 *  Класс Employee - шаблон (работники)
 * */
class Employee {

  /**
   * Конструктор
   * @param {string} name - имя работника
   * @param {number} salary - зарплата
   */
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  /**
   * В каком отделе работает работник
   */
  responsibilities() {}

  /**
   * Какую работу выполняет
   */
  work() {
    return `${this.name} выполняет ${this.responsibilities()}`
  }

  /**
   * Какую зарплату получает
   */
  getPaid() {
    return `${this.name} имеет ЗП ${this.salary}`
  }
}

/**
 *  Класс Developer - наследует шаблон Employee
 *  @extends Employee
 * */
class Developer extends Employee {

  /**
   * Конструктор
   * @param {string} name - имя работника
   * @param {number} salary - зарплата
   */
  constructor(name, salary) {
    super(name, salary)
  }

  /**
   * В каком отделе работает работник
   */
  responsibilities() {
    return 'процесс создания программ'
  }
}

/**
 *  Класс Tester - наследует шаблон Employee
 *  @extends Employee
 * */
class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  /**
   * В каком отделе работает работник
   */
  responsibilities() {
    return 'процесс тестирования'
  }
}

const dev = new Developer('Владилен', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Виктория', 90000)
console.log(tester.getPaid())
console.log(tester.work())
