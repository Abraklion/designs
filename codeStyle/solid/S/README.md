
# Single responsibility principle  ( принцип единственной ответственности )

Принцип ООП, обозначающий, что каждый объект должен иметь одну ответственность и эта ответственность должна быть полностью инкапсулирована в класс.

### Схема :

![схема](./img.jpg)

### Приемущества если писать код соблюдая принцип :

1. Появились **модули** (декомпозиция), читабильность выросла
2. Вносить изменения стало проще
3. Избавлись от антипаттерна **GodObject**
4. Класс **инкапсулирует** решение одной задачи

### Примеры

- [Пример 1](#Пример-1)
- [Пример 2](#Пример-2)
- [Пример 3](#Пример-3)

---

### Пример 1

### `Вариант который нарушает принцип (плохая практика)`

````js
class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

    html() {
        return `
      <div class="news">
        <h1>${this.title}</h1>
        <p>${this.text}</p>
      </div>
    `
    }
}

const news = new News('Путин', 'Новая конституция')

console.log("Пример который нарушает принцип")
console.log(news.html())
````
**Объяснение:** _метод html() нарушает принцеп единственной ответственности, потому что он отвечает за отображение новости_

### `Вариант который НЕ нарушает принцип  (хорошая практика)`

````js
class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }
}

class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    xml() {
        return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `
    }
}


const printer = new NewsPrinter(
    new News('Путин', 'Новая конституция')
)

console.log("Пример который НЕ нарушает принцип")
console.log(printer.html())
console.log(printer.xml())
console.log(printer.json())
````
**Объяснение:** _для отображения новости создали отдельный класс NewsPrinter, который отвечает за отображение новости, и не нарушает принцеп_ 

---

### Пример 2

### `Вариант который нарушает принцип (плохая практика)`

````ts
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
````
**Объяснение:** _метод save() log() send() нарушает принцеп единственной ответственности, потому что он отвечает за поведения модели User, а не за состояния модели User_

### `Вариант который НЕ нарушает принцип (хорошая практика)`

````ts
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
````
**Объяснение:** _для методов save() log() send(), созданы отдельные классы которые отвечают за поведения User_ 

---

### Пример 3

### `Вариант который нарушает принцип (плохая практика)`

````ts
class HttpClient {
    get(url: string) {}
    post() {}
    put() {}
    delete() {}

    getAllUsers() {}

    createRequisites() {}
}
````
**Объяснение:** _метод getAllUsers() createRequisites() нарушает принцеп единственной ответственности, потому что он отвечает за поведения модели HttpClient, а не за состояния модели HttpClient_

### `Вариант который НЕ нарушает принцип (хорошая практика)`

````ts
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
````
**Объяснение:** _создаем 2 класса UserService(по работе с пользователями) RequisitesService(по работе с реквизитами), и выносим в них методы работы с пользователями и реквизитами_ 