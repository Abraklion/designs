
/* ================================================ *
 *  Паттерн Abstract-factory (Абстрактная Фабрика)  *
 * ================================================ */

/**
 *  Производство BMW - абстрактная фабрика
 * */
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

/**
 *  Спорт-машины - фабрика 1
 * */
function sportCarFactory() {
  return new Z4();
}

/**
 *  Семейные-машины - фабрика 2
 * */
function familyCarFactory() {
  return new I3();
}

/**
 *  Машины класса Sport
 * */
class Z4 {
  info() {
    return "Z4 is a Sport car!";
  }
}

/**
 *  Машины класса Family
 * */
class I3 {
  info() {
    return "i3 is a Family car!";
  }
}

const Produce = bmwProducer('sport')

const myCar = new Produce()

console.dir(myCar.info())

