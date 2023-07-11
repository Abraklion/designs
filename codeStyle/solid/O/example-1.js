
/* ======================================================== *
 *  Open-closed principle ( принцип открытости/закрытости ) *
 * ======================================================== */

/** ====================================== *
 *    Пример который нарушает принцип      *
 * ======================================= */

// клас AreaCalculator нарушает принцип, потому что для каждой новый фигуры нам нажно изменять метод sum()
    // что не есть хорошо потому что надо тестировать старый код что бы он не сломался.

class Square {
    constructor(size) {
        this.type = 'square'
        this.size = size
    }
}

class Circle {
    constructor(size) {
        this.type = 'circle'
        this.radius = size
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            if(shape.type === 'circle') {
                acc += (shape.radius ** 2) * Math.PI
            } else if(shape.type === 'square') {
                acc += shape.size ** 2
            }

            return acc
        }, 0)
    }
}


/** ========================================= *
 *    Пример который НЕ нарушает принцип      *
 * ========================================== */

// создаем класс Shape(фигура) и говорим что все наследники должны реализовать метод area()
    // теперь класс AreaCalculator в методе sum() просто вызывает метод area()
    // класс Shape расширяется (фигурами кторые наследуют этот класс), а код в классе AreaCalculator не изменяется

class Shape {
    area() {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super()
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
        }, 0)
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1)
])

console.log(calc.sum())