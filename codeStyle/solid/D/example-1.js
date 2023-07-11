
/* ================================================================ *
 *  Dependency inversion principle ( принцип инверсии зависимости ) *
 * ================================================================ */

/** ====================================== *
 *    Пример который нарушает принцип      *
 * ======================================= */

// нарушается 2 принцеп открытости и закрытости потому что если поменять Fetch на LocalStorage надо переписывать Database
    // так же Database зависит от модулей Fetch или LocalStorage что нарушает принцип инверсии зависимости

class Fetch1 {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage1 {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}


class Database1 {
    constructor() {
        //this.fetch = new Fetch()
        this.localStorage = new LocalStorage()
    }

    getData(key) {
        //return this.fetch.request('vk.ru')
        return this.localStorage.get('key')
    }
}


const db1 = new Database()

console.log(db1.getData('rand'))

/** ========================================= *
 *    Пример который НЕ нарушает принцип      *
 * ========================================== */

// сделали одинаковый интерфейс для методов Fetch и LocalStorage, путем создания абстракции LocalStorage и FetchClient
    // и Database больше не зависит от реализации Fetch или LocalStorage, а от абстракции LocalStorage и FetchClient

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve('data from fetch')
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }

    clientGet() {
        return this.fetch.request('vk.com')
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }
}


class Database {
    constructor(client) {
        this.client = client
    }

    getData(key) {
        return this.client.clientGet(key)
    }
}


const db = new Database(new LocalStorageClient())

console.log(db.getData('rand'))