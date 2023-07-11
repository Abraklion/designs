
/* ================================================================== *
 *  Interface segregation principle ( принцип разделения интефейсов ) *
 * ================================================================== */

/** ====================================== *
 *    Пример который нарушает принцип      *
 * ======================================= */

// классы Dog Eagle Whale наследуют не нужные методы которые они не реализовывают, это нарушает принцип

class Animal1 {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(`${this.name} умеет ходить`)
  }

  swim() {
    console.log(`${this.name} умеет плавать`)
  }

  fly() {
    console.log(`${this.name} умеет летать`)
  }
}

class Dog1 extends Animal {
  fly() {
    return null
  }
}

class Eagle1 extends Animal {
  swim() {
    return null
  }
}

class Whale1 extends Animal {
  fly() {
    return null
  }

  walk() {
    return null
  }
}


/** ========================================= *
 *    Пример который НЕ нарушает принцип      *
 * ========================================== */

// принцип не нарушен Dog Eagle Whale наследуют только нужные методы

class Animal {
    constructor(name) {
        this.name = name
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} умеет плавать`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} умеет летать`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} умеет ходить`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Рэкс')
dog.walk()
dog.swim()

const eagle = new Eagle('Орел')
eagle.fly()
eagle.walk()

const whale = new Whale('Большой синий друг')
whale.swim()