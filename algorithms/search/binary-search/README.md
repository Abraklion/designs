
# Двоичный поиск `Binary Search`

В компьютерных науках бинарный поиск, также известный как полуинтервальный поиск, логарифмический поиск или двоичный поиск, представляет собой алгоритм поиска, который находит положение целевого значения в отсортированном массиве. Двоичный поиск сравнивает целевое значение со средним элементом массива; если они не равны, половина, в которой цель не может лежать, исключается, а поиск продолжается на оставшейся половине до тех пор, пока он не будет успешным. Если поиск заканчивается тем, что оставшаяся половина пуста, цель отсутствует в массиве.

![Линейный поиск](./img.svg)

## Сложность

Временная сложность : `O(log(n))` - так как мы разделяем область поиска на два для каждой следующей итерации.



## Примеры

- [Пример 1 - поиск позиции растения в отсортированным массиве](#Пример-1)
- [Пример 2 - удар легенд (читайте задание)](#Пример-2)
- [Пример 3 - пристствует элемент в массиве или нет (рекурсивно)](#Пример-3)

---

### Пример 1

### `Шаг 1`

_На входе будем иметь отсортированный в алфавитном порядке список из растений. Напишем функцию, которая будет бинарным поиском искать позицию переданного в неё растения._

````js
function binarySearch(plants, plant) {
  return null;
}

const plants = [
  "Аспарагус",
  "Гвоздика",
  "Жасмин",
  "Калина",
  "Малина",
  "Пион",
  "Тысячелистник",
  "Хризантема",
  "Шафран",
  "Юкка",
]

binarySearch(plants, "Пион") // => 5
binarySearch(plants, "Роза") // => null
````

### `Шаг 2`

_Для начала обработаем самый простой случай: если то, что мы ищем, лежит ровно по центру — просто возвращаем индекс центра. Осталось написать всего ничего — смещение левой и правой границы поиска._

````js
function binarySearch(plants, plant) {
  const left = 0;
  const right = plants.length - 1;

  // Стандартная формула для поиска середины отрезка
  const center = Math.floor((right + left) / 2);

  if (center === plant) {
    return center;
  }

  return null;
}

const plants = [
  "Аспарагус",
  "Гвоздика",
  "Жасмин",
  "Калина",
  "Малина",
  "Пион",
  "Тысячелистник",
  "Хризантема",
  "Шафран",
  "Юкка",
]

binarySearch(plants, "Пион") // => 5
binarySearch(plants, "Роза") // => null
````

### `Шаг 3`

_Вот и всё, первый бинарный поиск написан! Обратите внимание, что при смещении центра влево мы ищем от текущей левой границы до центра, не включая центр. То же самое касается и смещения вправо. С одной стороны, эта микрооптимизация поможет нам чуть быстрее смещать границы, ведь центр мы уже обработали. А с другой, гарантирует нам нарушение условия `left` < `right`, ведь если мы не найдем искомое в массиве из одного элемента, то одна из границ гарантированно зайдёт за другую._

````js
function binarySearch(plants, plant) {
  let left = 0;
  let right = plants.length - 1;

  while (left <= right) {
    const center = Math.floor((right + left) / 2);

    if (plants[center] === plant) {
      return center;
    }

    // Если то, что мы ищем, левее по алфавиту, идем искать в левую часть массива
    if (plants[center].localeCompare(plant) === 1) {
      right = center - 1;
      // иначе идем в другую сторону
    } else {
      left = center + 1;
    }
  }

  return null;
}

const plants = [
  "Аспарагус",
  "Гвоздика",
  "Жасмин",
  "Калина",
  "Малина",
  "Пион",
  "Тысячелистник",
  "Хризантема",
  "Шафран",
  "Юкка",
]

binarySearch(plants, "Пион") // => 5
binarySearch(plants, "Роза") // => null
binarySearch(plants, "Аспарагус") // => 0
binarySearch(plants, "Хризантема") // => 7
binarySearch(plants, "Юкка") // => 9
````

---

### Пример 2

### `Задание :`

Онлайн игра «Удар легенд» имеет ранговый режим, при котором игроки соревнуются между собой. Игрок может попасть в одну из пяти лиг в зависимости от счёта: чем номер лиги выше, тем лучше. Перед тем, как попасть в лигу, игроки должны отыграть пять калибровочных игр, а до завершения пятой они не знают, на какое место и какую лигу претендуют. Аналитики хотят добавить в экран завершения игры новую опцию: показывать игрока с точно таким же рейтингом, как у текущего игрока в момент калибровки. Таким образом, игроки будут примерно представлять, в какую лигу и в какое её место они попадут после калибровки.

Каждый из игроков в рейтинге представлен следующим объектом:

````json
{
  "login": "LuckyWasTaken",
  "leaguePoints": 9001
}
````

А сам рейтинг — массив из лиг, которые тоже представляют собой массивы с игроками (это объекты, описанные выше). Например, вот таблица со счётами четырех игроков, по два в каждой лиге

````json
[
  [
    {
      "login": "stypeano",
      "leaguePoints": 23
    },
    {
      "login": "rstrazir",
      "leaguePoints": 42
    }
  ],
  [
    {
      "login": "kinerber",
      "leaguePoints": 322
    },
    {
      "login": "eridarma",
      "leaguePoints": 1337
    }
  ]
]
````

Тогда, если по окончании одного из матчей у игрока 322 очка, на экране завершения игры мы должны показать, что он — претендент в начало второй лиги.

Ваша задача — реализовать функцию для поиска по таблице лидеров, которая на вход принимает количество очков и непосредственно таблицу, а возвращает объект:

````json
{
  "league": 1,
  "placement": 1
}
````

Где `league` — это номер лиги (осторожно, люди считают с единицы, в отличие от индексации массива), а `placement` — место в лиге (с конца, ведь лучшие игроки в массиве лиги идут после худших).

То есть если игрок набрал при калибровке 322 очка, то функция должна вернуть:

````json
{
  "league": 2,
  "placement": 2
}
````

Естественно, в настоящей таблице могут быть миллионы игроков (по крайней мере, аналитики надеются на такой успех), поэтому и поиск должен работать максимально оптимальным образом!

Можете использовать данные из этого раздела в качестве тестовых:

````json
[
  [
    {
      "login": "stypeano",
      "leaguePoints": 4
    },
    {
      "login": "rstrazir",
      "leaguePoints": 45
    },
    {
      "login": "cathead",
      "leaguePoints": 143
    },
    {
      "login": "cavernous",
      "leaguePoints": 324
    }
  ],
  [
    {
      "login": "ConspiracyLil",
      "leaguePoints": 356
    },
    {
      "login": "CzarStories",
      "leaguePoints": 568
    },
    {
      "login": "GottaSaiyan",
      "leaguePoints": 598
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 785
    }
  ],
  [
    {
      "login": "Rectionom",
      "leaguePoints": 930
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931
    },
    {
      "login": "DreamLess",
      "leaguePoints": 956
    },
    {
      "login": "BlondiePlanet",
      "leaguePoints": 1045
    }
  ],
  [
    {
      "login": "Breakingbing",
      "leaguePoints": 1056
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 1130
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476
    }
  ]
]
````

### `Решение :`

### `Шаг 1`

_Модифицируем обычный бинарный поиск так, чтобы он работал с нашим массивом массивов! Бинарным поиском найдём сначала нужную лигу. Только вместо попадания по точному количеству очков будем делить таблицу пополам и смотреть, попадёт ли наше количество очков в промежуток этой лиги, и делить пополам дальше уже относительно этой середины. Чтобы не переусложнять функцию, вынесем поиск по лигам отдельно. Мы всё так же делим пополам наш интервал поиска и идём искать дальше в одну из половинок, если нам не подходит середина._

````js
function searchScore(leaderboard, leaguePoints) {
  const leagueIndex = searchLeagueByScore(leaderboard, leaguePoints)

  return null;
}

function searchLeagueByScore(leaderboard, leaguePoints) {
  let left = 0;
  let right = leaderboard.length - 1;

  const firstPlacePoints = leaderboard[right][leaderboard[right].length - 1].leaguePoints;
  const lastPlacePoints = leaderboard[0][0].leaguePoints;

  // Если количество очков вообще не входит в промежутки в таблице
  // (меньше минимального или больше максимального)
  if (lastPlacePoints > leaguePoints || firstPlacePoints < leaguePoints) {
    // значит, такой лиги точно нет
    return null;
  }

  // пока концы промежутка, в котором мы ищем, не сошлись
  while (left <= right) {
    // делим наш промежуток (примерно) пополам
    const middleIndex = Math.floor((right + left) / 2);
    const middle = leaderboard[middleIndex];

    const firstPlayerPoints = middle[middle.length - 1].leaguePoints;
    const lastPlayerPoints = middle[0].leaguePoints;

    // если очки входят в лигу по середине - значит, это то, что мы ищем
    if (lastPlayerPoints <= leaguePoints && leaguePoints <= firstPlayerPoints) {
      return middleIndex;
    }

    // если очков для этой лиги слишком мало
    if (lastPlayerPoints > leaguePoints) {
      // то двигаем правый край нашего поиска до серединки
      // (ищем от начала до текущей середины)
      right = middleIndex - 1;
      // а если наоборот слишком много
    } else if (leaguePoints > firstPlayerPoints) {
      // то ищем справа
      left = middleIndex + 1;
    }
  }

  // если края всё-таки сошлись - значит, такой лиги нет
  return null;
}

const data = [
  // смотрите исходные данные к задаче
]

searchScore(data, 4) // => { "league": 1, "placement": 4 }

searchScore(data, 14) // => null
````

### `Шаг 2`

_После того как мы нашли нужную лигу (либо сразу отдали null, если не нашли), нам остаётся написать ещё один бинарный поиск уже по ней._

````js
function searchScore(leaderboard, leaguePoints) {
  const leagueIndex = searchLeagueByScore(leaderboard, leaguePoints);

  if (leagueIndex === null) {
    return null;
  }

  const placementIndex = searchInLeague(leaderboard[leagueIndex], leaguePoints);

  return null;
}

function searchLeagueByScore(leaderboard, leaguePoints) {
  let left = 0;
  let right = leaderboard.length - 1;

  const firstPlacePoints = leaderboard[right][leaderboard[right].length - 1].leaguePoints;
  const lastPlacePoints = leaderboard[0][0].leaguePoints;

  // Если количество очков вообще не входит в промежутки в таблице
  // (меньше минимального или больше максимального)
  if (lastPlacePoints > leaguePoints
    || firstPlacePoints < leaguePoints) {
    // значит такой лиги точно нет
    return null;
  }

  // пока концы промежутка, в котором мы ищем, не сошлись
  while (left <= right) {
    // делим наш промежуток (примерно) пополам
    const middleIndex = Math.floor((right + left) / 2);
    const middle = leaderboard[middleIndex];

    const firstPlayerPoints = middle[middle.length - 1].leaguePoints;
    const lastPlayerPoints = middle[0].leaguePoints;

    // если очки входят в лигу по середине - значит, это то, что мы ищем
    if (lastPlayerPoints <= leaguePoints && leaguePoints <= firstPlayerPoints) {
      return middleIndex;
    }

    // если очков для этой лиги слишком мало
    if (lastPlayerPoints > leaguePoints) {
      // то двигаем правый край нашего поиска до серединки
      // (ищем от начала до текущей середины)
      right = middleIndex - 1;
      // а если наоборот слишком много
    } else if (leaguePoints > firstPlayerPoints) {
      // то ищем справа
      left = middleIndex + 1;
    }
  }

  // если края всё-таки сошлись - значит, такой лиги нет
  return null;
}

function searchInLeague(league, leaguePoints) {
  let left = 0;
  let right = league.length - 1;

  while (left <= right) {
    const middleIndex = Math.floor((right + left) / 2);
    const {leaguePoints: middleLeaguePoints} = league[middleIndex];

    if (middleLeaguePoints === leaguePoints) {
      return middleIndex;
    }

    if (middleLeaguePoints > leaguePoints) {
      right = middleIndex - 1;
    } else if (leaguePoints > middleLeaguePoints) {
      left = middleIndex + 1;
    }
  }

  return null;
}

const data = [
  // смотрите исходные данные к задаче
]

searchScore(data, 4) // => { "league": 1, "placement": 4 }

searchScore(data, 14) // => null
````

### `Шаг 3`

_Осталось отдавать наше решение в виде, установленный в задачи! В итоге мы получили гораздо больше кода, чем в изначальном решении с полным перебором, но работает он быстрее. Если оценить его, то мы получим `O(log(n) + log(m))`, что преобразуется в наше обещанное `O(log(n*m))` по свойству сложения логарифмов._

````js
function searchScore(leaderboard, leaguePoints) {
  const leagueIndex = searchLeagueByScore(leaderboard, leaguePoints);

  if (leagueIndex === null) {
    return null;
  }

  const placementIndex = searchInLeague(leaderboard[leagueIndex], leaguePoints);

  if (placementIndex === null) {
    return null;
  }

  const league = leagueIndex + 1;
  const placement = leaderboard[leagueIndex].length - placementIndex;

  return {league, placement};
}

function searchLeagueByScore(leaderboard, leaguePoints) {
  let left = 0;
  let right = leaderboard.length - 1;

  const firstPlacePoints = leaderboard[right][leaderboard[right].length - 1].leaguePoints;
  const lastPlacePoints = leaderboard[0][0].leaguePoints;

  // Если количество очков вообще не входит в промежутки в таблице
  // (меньше минимального или больше максимального)
  if (lastPlacePoints > leaguePoints || firstPlacePoints < leaguePoints) {
    // значит такой лиги точно нет
    return null;
  }

  // пока концы промежутка, в котором мы ищем, не сошлись
  while (left <= right) {
    // делим наш промежуток (примерно) пополам
    const middleIndex = Math.floor((right + left) / 2);
    const middle = leaderboard[middleIndex];

    const firstPlayerPoints = middle[middle.length - 1].leaguePoints;
    const lastPlayerPoints = middle[0].leaguePoints;

    // если очки входят в лигу по середине - значит, это то, что мы ищем
    if (lastPlayerPoints <= leaguePoints && leaguePoints <= firstPlayerPoints) {
      return middleIndex;
    }

    // если очков для этой лиги слишком мало
    if (lastPlayerPoints > leaguePoints) {
      // то двигаем правый край нашего поиска до серединки
      // (ищем от начала до текущей середины)
      right = middleIndex - 1;
    // а если наоборот слишком много
    } else if (leaguePoints > firstPlayerPoints) {
      // то ищем справа
      left = middleIndex + 1;
    }
  }

  // если края всё-таки сошлись - значит, такой лиги нет
  return null;
}

function searchInLeague(league, leaguePoints) {
  let left = 0;
  let right = league.length - 1;

  while (left <= right) {
    const middleIndex = Math.floor((right + left) / 2);
    const {leaguePoints: middleLeaguePoints} = league[middleIndex];

    if (middleLeaguePoints === leaguePoints) {
      return middleIndex;
    }

    if (middleLeaguePoints > leaguePoints) {
      right = middleIndex - 1;
    } else if (leaguePoints > middleLeaguePoints) {
      left = middleIndex + 1;
    }
  }

  return null;
}

const data = [
  // смотрите исходные данные к задаче
]

searchScore(data, 4) // => { "league": 1, "placement": 4 }

searchScore(data, 14) // => null
````

---


### Пример 3

### `Шаг 1`

_Чуть упростим задачу поиска. Теперь будем не возвращать индекс искомого элемента, а лишь говорить, присутствует элемент или нет (этакий оптимизированный includes на сортированном массиве)._

````js
function binarySearch(array, element) {
  return false;
}

binarySearch([], 3) // => false
binarySearch([3], 3) // => true
binarySearch([1, 2, 3, 4, 5], 4) // => true
binarySearch([1, 2, 3, 5, 6], 4) // => false
````

### `Шаг 2`

_Очевидно, что базовый случай у этой задачи — поиск в массиве из одного элемента. Если он является нашим искомым элементом — возвращаем true, иначе — false. Если массив пустой, искать тоже не стоит — просто вернём false._

````js
function binarySearch(array, element) {
  if (array.length === 0) {
    return false;
  }

  if (array.length === 1) {
    return array[0] === element;
  }

  return false;
}

binarySearch([], 3) // => false
binarySearch([3], 3) // => true
binarySearch([1, 2, 3, 4, 5], 4) // => true
binarySearch([1, 2, 3, 5, 6], 4) // => false
````

### `Шаг 3`

_А теперь начинаем выделять из этой задачи подзадачи — делим наш массив пополам._

````js
function binarySearch(array, element) {
  if (array.length === 0) {
    return false;
  }

  if (array.length === 1) {
    return array[0] === element;
  }

  const middle = Math.floor(array.length / 2);

  return false;
}

binarySearch([], 3) // => false
binarySearch([3], 3) // => true
binarySearch([1, 2, 3, 4, 5], 4) // => true
binarySearch([1, 2, 3, 5, 6], 4) // => false
````

### `Шаг 4`

_И запускаем подзадачу поиска в нужной нам части массива! Определять нужную часть массива мы уже научились в прошлой главе._

````js
function binarySearch(array, element) {
  if (array.length === 0) {
    return false;
  }

  if (array.length === 1) {
    return array[0] === element;
  }

  const middle = Math.floor(array.length / 2);

  if (array[middle] > element) {
    return binarySearch(array.slice(0, middle), element)
  }

  return binarySearch(array.slice(middle + 1), element)
}

binarySearch([], 3) // => false
binarySearch([3], 3) // => true
binarySearch([1, 2, 3, 4, 5], 4) // => true
binarySearch([1, 2, 3, 5, 6], 4) // => false
````

### `Шаг 5`

_На самом деле, мы потеряли ещё один базовый случай: если в середине уже лежит искомый нам элемент, нам не нужно создавать подзадачи, просто будем возвращать true._

````js
function binarySearch(array, element) {
  if (array.length === 0) {
    return false;
  }

  if (array.length === 1) {
    return array[0] === element;
  }

  const middle = Math.floor(array.length / 2);

  if (array[middle] === element) {
    return true;
  }

  if (array[middle] > element) {
    return binarySearch(array.slice(0, middle), element)
  }

  return binarySearch(array.slice(middle + 1), element)
}

binarySearch([], 3) // => false
binarySearch([3], 3) // => true
binarySearch([1, 2, 3, 4, 5], 4) // => true
binarySearch([1, 2, 3, 5, 6], 4) // => false
````

## Ссылки на литературу

- [Youtube](https://www.youtube.com/watch?v=P3YID7liBug&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=30&ab_channel=HackerRank)



