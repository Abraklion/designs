
/* ========================================================================== *
 *  Single responsibility principle  ( принцеп единственной ответственности ) *
 * ========================================================================== */


/** ====================================== *
 *    Пример который нарушает принцип      *
 * ======================================= */

// метод getAllUsers() createRequisites() нарушает принцеп единственной ответственности, потому что он отвечает за поведения модели HttpClient, а не за состояния модели HttpClient

class HttpClient {
    get(url: string) {}
    post() {}
    put() {}
    delete() {}

    getAllUsers() {}

    createRequisites() {}
}


/** ========================================= *
 *    Пример который НЕ нарушает принцип      *
 * ========================================== */

// создаем 2 класса UserService(по работе с пользователями) RequisitesService(по работе с реквизитами), и выносим в них методы работы с пользователями и реквизитами

class HttpClientTrue {
    get(url: string) {}
    post() {}
    put() {}
    delete() {}
}

class UserService {
    client: HttpClient;
    constructor(client) {
        this.client = client;
    }
    getOneUser(id: number) {}
    getAllUsers() {}
}

class RequisitesService {
    createRequisites() {}
    getRequisites() {}
    updateRequisites() {}
}