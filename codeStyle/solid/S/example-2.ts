
/* ========================================================================== *
 *  Single responsibility principle  ( принцеп единственной ответственности ) *
 * ========================================================================== */

const http = {
    send: () => ({})
};

const generateId = () => Date.now() * Math.random();


/** ====================================== *
 *    Пример который нарушает принцип      *
 * ======================================= */

// метод save() log() send() нарушает принцеп единственной ответственности, потому что он отвечает за поведения модели User, а не за состояния модели User

class User {
    id: number;
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.id = generateId();
        this.username = username;
        this.password = password;
    }

    save() {
        // сохранение пользователя в бд
    }

    log() {
        console.log(this)
    }

    send() {
        return http.send()
    }
}


/** ========================================= *
 *    Пример который НЕ нарушает принцип      *
 * ========================================== */

// для методов save() log() send(), созданы отдельные классы которые отвечают за поведения User

class UserTrue {
    id: number;
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.id = generateId();
        this.username = username;
        this.password = password;
    }
}

class UserRepository {
    save(user: UserTrue) {
        // сохранение пользователя в бд
    }
}

class UserLogger {
    log(user: UserTrue) {
        console.log(user)
    }
}

class UserController {
    send(user: UserTrue) {
        return http.send()
    }
}