
/* ======================= *
 *  Паттерн Proxy (Прокси) *
 * ======================= */

/**
 * @function networkFetch - посылаеи запрос на сервер
 * @param {string} url - url
 * @return {string}
 */
function networkFetch(url) {
  return `${url} - Ответ с сервера`
}

/**
 *  Кэш
 *  @type {Object}
 * */
const cache = new Set()

/**
 *  Прокси обьект
 *  @type {Object}
 * */
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]

    if (cache.has(url)) {
      return `${url} - Ответ из кэша`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('angular.io'))


