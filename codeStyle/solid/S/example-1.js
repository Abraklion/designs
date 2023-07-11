
/* ========================================================================== *
 *  Single responsibility principle  ( принцеп единственной ответственности ) *
 * ========================================================================== */

/** ====================================== *
 *    Пример который нарушает принцип      *
 * ======================================= */

// метод html() нарушает принцеп единственной ответственности, потому что он отвечает за отображение новости

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



/** ========================================= *
 *    Пример который НЕ нарушает принцип      *
 * ========================================== */

// для отображения новости создали отдельный класс NewsPrinter, который отвечает за отображение новости  

class NewsTrue {
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
    new NewsTrue('Путин', 'Новая конституция')
)

console.log("Пример который НЕ нарушает принцип")
console.log(printer.html())
console.log(printer.xml())
console.log(printer.json())
