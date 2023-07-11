
/* ======================================================== *
 *  Open-closed principle ( принцип открытости/закрытости ) *
 * ======================================================== */

/** ===================================== *
 *    Пример который нарушает принцип     *
 * ====================================== */

// дублирует условия в MusicList и PersonList в методе sort() что ни есть хорошо

class BubbleSort1 {
    public static sort(array: any[]): any[] {
        return array;
    }
}

class QuickSort1 {
    public static sort(array: any[]): any[] {
        return array;
    }
}

class MergeSort1 {
    public static sort(array: any[]): any[] {
        return array;
    }
}

class Person1 {
    fullname: string;

    constructor(fullname: string) {
        this.fullname = fullname;
    }
}

class PersonList1 {
    persons: Person[]

    constructor(persons: Person[]) {
        this.persons = persons;
    }

    sort() {
        if(this.persons.length < 10) {
            return BubbleSort1.sort(this.persons);
        } else if (this.persons.length < 1000 ) {
            return MergeSort1.sort(this.persons);
        } else {
            return QuickSort1.sort(this.persons)
        }
    }
}

class Music1 {}

class MusicList1 {
    musics: Music[]
    constructor(musics: Music[]) {
        this.musics = musics;
    }

    sort() {
        if(this.musics.length < 10) {
            return BubbleSort1.sort(this.musics);
        } else if (this.musics.length < 1000 ) {
            return MergeSort1.sort(this.musics);
        } else {
            return QuickSort1.sort(this.musics)
        }
    }
}


/** ========================================= *
 *    Пример который НЕ нарушает принцип      *
 * ========================================== */

// создаем абстракцию над сортировками класс SortClient. И делигируем в MusicList и PersonList в метод sort()
    // и есть нам надо будет добавить сортировку мы делаем это в одном месте SortClient

class Sort {
    public static sort(array: any[]): any[] {return []}
}

class BubbleSort extends Sort{
    public static sort(array: any[]): any[] {
        return array;
    }
}

class QuickSort extends Sort {
    public static sort(array: any[]): any[] {
        return array;
    }
}

class MergeSort extends Sort {
    public static sort(array: any[]): any[] {
        return array;
    }
}

class SortClient extends Sort{
    public static sort(array: any[]): any[] {
        if(array.length < 10) {
            return BubbleSort.sort(array);
        } else if (array.length < 1000 ) {
            return MergeSort.sort(array);
        } else {
            return QuickSort.sort(array)
        }
    }
}

class Person {
    fullname: string;

    constructor(fullname: string) {
        this.fullname = fullname;
    }
}

class PersonList {
    persons: Person[]

    constructor(persons: Person[]) {
        this.persons = persons;
    }
    sort() {
        SortClient.sort(this.persons)
    }
}

class Music {}

class MusicList {
    musics: Music[]
    constructor(musics: Music[]) {
        this.musics = musics;
    }

    sort() {
        SortClient.sort(this.musics)
    }
}