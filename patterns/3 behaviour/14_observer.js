
/* =============================== *
 *  Паттерн Observer (Наблюдатель) *
 * =============================== */

// работает по принцепу одни(Subject) ко многим(Observer)

/**
 *  Класс Subject - один (за ним наблюдают, назваемтся наблюдаемым)
 * */
class Subject {

  /**
   * Конструктор
   */
  constructor() {
    this.observers = []
  }

  /**
   * подписать
   * @param {Object} observer - наблюдатель
   * @returns {void}
   */
  subscribe(observer) {
    this.observers.push(observer)
  }

  /**
   * отписаться
   * @param {Object} observer - наблюдатель
   * @returns {void}
   */
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  /**
   * дать команду всем наблюдателям
   * @param {Object} action - команда
   * @returns {void}
   */
  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action)
    })
  }
}

/**
 *  Класс Observer - много (наблюдатель)
 * */
class Observer {

  /**
   * Конструктор
   * @param {number} state - начальное состояния
   */
  constructor(state = 1) {
    this.state = state
    this.initialState = state
  }

  /**
   * выполнить команду наблюдаемого обьекта и изменить state(начальное состояния)
   * @param {Object} action - команда
   * @returns {void}
   */
  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state = ++this.state
        break
      case 'DECREMENT':
        this.state = --this.state
        break
      case 'ADD':
        this.state += action.payload
        break
      default:
        this.state = this.initialState
    }
  }
}

const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'DECREMENT'})
stream$.fire({type: 'ADD', payload: 10})

console.log(obs1.state)
console.log(obs2.state)
