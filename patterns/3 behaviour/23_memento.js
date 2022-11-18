
/* ========================== *
 *  Паттерн Memento (Снимок)  *
 * ========================== */

/**
 *  Класс Делает снимки
 * */
class Memento {
  constructor(value) {
    this.value = value;
  }
}

/**
 *  Управления снимками
 *  @type {Object}
 * */
const creator = {
  save: val => new Memento(val),
  restore: memento => memento.value,
};

/**
 *  Класс сохраняет и достает снимки их хранилища
 * */
class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

const careTaker = new Caretaker();

careTaker.addMemento(creator.save('Hello'))
careTaker.addMemento(creator.save('Hello word'))
careTaker.addMemento(creator.save('Hello word !!!'))

console.log(creator.restore(careTaker.getMemento(1)))

let a = console.log('asdasdasd')

