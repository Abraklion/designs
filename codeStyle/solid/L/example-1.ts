
/* ====================================================================== *
 *  Liskov substitution principle ( принцип подстановки Барбары Лисков )  *
 * ====================================================================== */

/** ====================================== *
 *    Пример который нарушает принцип      *
 * ======================================= */

// У класса MongoDatabase не может быть метода joinTables(), а функция startApp на вход приминиет инстанс класса Database
    // и если передать инстанс MongoDatabase в startApp он будет ожидать что метод joinTables() у него будет реализован

class Database1 {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
}

class MySQLDatabase1 extends Database1 {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
}

class MongoDatabase1 extends Database1 {
    connect() {}
    read() {}
    write() {}
    joinTables() {
        throw new Error('У монго БД нет таблиц')
    }
}


function startApp1(database: Database1) {
    database.connect()
}
startApp(new MongoDatabase1())
startApp(new MySQLDatabase1())


/** ========================================= *
 *    Пример который НЕ нарушает принцип      *
 * ========================================== */

// удаляем метод joinTables() из Database, создаем дополнительную абстракцию SQLDatabase и NOSQLDatabase
    // SQLDatabase для релиционых бд и там реализуем метод joinTables() и от него уже создаем MySQLDatabase
    // NOSQLDatabase для не релиционых бд и там реализуем метод createIndex() и от него уже создаем MongoDatabase
    // а функция startApp на вход приминиет инстанс наследуемый от класса Database и там должны быть реализованы методы Database ( connect() | read() |  write() )

class Database {
    connect() {}
    read() {}
    write() {}
}

class SQLDatabase extends Database {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
}

class NOSQLDatabase extends Database {
    connect() {}
    read() {}
    write() {}
    createIndex() {}
}

class MySQLDatabase extends SQLDatabase {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
}

class MongoDatabase extends NOSQLDatabase {
    connect() {}
    read() {}
    write() {}
    createIndex() {}
    mergeDocuments() {}
}


function startApp(database: Database) {
    database.connect()
}
startApp(new MongoDatabase())
startApp(new MySQLDatabase())