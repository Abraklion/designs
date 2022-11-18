
/* ============================== *
 *  Паттерн Visitor (Посетитель)  *
 * ============================== */

/**
 *  Класс Auto
 * */
class Auto {
  accept(visitor) {
    visitor(this);
  }
}

/**
 *  Класс Tesla
 * */
class Tesla extends Auto {
  info() {
    return 'It is a Tesla car!';
  }
}

/**
 *  Класс Bmw
 * */
class Bmw extends Auto {
  info() {
    return 'It is a BMW car!';
  }
}

/**
 *  Класс Audi
 * */
class Audi extends Auto {
  info() {
    return 'It is an Audi car!';
  }
}

/**
 *  Функция реализует паттерн Visitor (добавляет новый метод к автомобилю не изменяя первоначальную реализацию)
 * */
function exportVisitor(auto) {
  if (auto instanceof Tesla){
    auto.export = () => `${auto.info()} extends`
    console.log(`Exported data: ${auto.info()}`);
  }

  if (auto instanceof Bmw) {
    auto.export = () => `${auto.info()} extends`
    console.log(`Exported data: ${auto.info()}`);
  }

  if (auto instanceof Audi) {
    auto.export = () => `${auto.info()} extends`
    console.log(`Exported data: ${auto.info()}`);
  }

}

const tesla = new Tesla();
const bmw = new Bmw();

tesla.accept(exportVisitor)
console.dir(tesla)
console.log(tesla.export())