
/* ================================================================ *
 *  Dependency inversion principle ( принцип инверсии зависимости ) *
 * ================================================================ */

/** ===================================== *
 *    Пример который нарушает принцип     *
 * ====================================== */

// нарушается 2 принцеп открытости и закрытости, изменяется класс MusicApp
    // так же MusicApp зависит от деталей модулей YandexMusicApi или SpotifyApi или VKMusicApi что нарушает принцип инверсии зависимости

class YandexMusicApi1 {
    getTracks(): void {}
}

class SpotifyApi1{
    find(): void {}
}

class VKMusicApi1{
    query(): void {}
}

const MusicApp1 = () => {
    const API = new YandexMusicApi1()

    API.getTracks()
}

/** ======================================= *
 *    Пример который НЕ нарушает принцип   *
 * ========================================*/

// появился полиморфизм за счет интерфейса MusicApi
    // интерфейс класса MusicApp не надо изменять за счет абстракции MusicClient

interface MusicApi {
    getTracks: () => void;
}

class YandexMusicApi implements MusicApi {
    getTracks(): void {}
}

class SpotifyApi implements MusicApi {
    getTracks(): void {}
}

class VKMusicApi implements MusicApi {
    getTracks(): void {}
}

class MusicClient implements MusicApi {
    client: MusicApi;

    constructor(client: MusicApi) {
        this.client = client;
    }

    getTracks() {
        this.client.getTracks();
    }
}

const MusicApp = () => {
    const API = new MusicClient(new SpotifyApi())

    API.getTracks()
}


