
/* ================================================================== *
 *  Interface segregation principle ( принцип разделения интефейсов ) *
 * ================================================================== */

/** ===================================== *
 *    Пример который нарушает принцип     *
 * ====================================== */

// Есть один большой интерфейс IRouter который содержит в себе методы и клиента и сервера
    // это нарушает принцеп разделения интефейсов

const createStore1 = (initial: any) => {}
const initialData1 = () => {}

interface IRouter1 {
  parseUrl: (url) => void;
  navigate: (route: Route1) => void;
  attachEventListeners: () => void;
  addQueryParams: (params: Record<string, string>) => void;
}

enum Route1 {
  ABOUT='about_page',
  HOME='home_page',
}

class Router1 implements IRouter1 {
  parseUrl(url) : void {}
  navigate(route: Route1): void {}
  attachEventListeners(): void {}
  addQueryParams(params: Record<string, string>): void {}
}


const renderHtmlPage1 = (store: any, url: any) => {
    const router = new Router1();
}

const client1 = () => {
  const store = createStore1(initialData);

  const router = new Router1();
}

const server1 = (req, res) => {
  const store = createStore1(initialData);


  const htmlPage = renderHtmlPage1(store, req.url)
}

/** ===================================================== *
 *    Пример который НЕ нарушает принцип | Решения 1      *
 * ====================================================== */

// Разделяем Router и создаем две пололнительные абстракции IClientRouter IServerRouter

const createStore = (initial: any) => {}
const initialData = () => {}

enum Route {
  ABOUT='about_page',
  HOME='home_page',
}

interface Router {
  parseUrl: (url) => void;
  addQueryParams: (params: Record<string, string>) => void;
}

interface IClientRouter extends Router {
  navigate: (route: Route) => void;
  attachEventListeners: () => void;
}

interface IServerRouter extends Router {
  prepareUrlForClient: (url: string) => void;
}

class ServerRouter implements IServerRouter {
  parseUrl(url): void {}
  addQueryParams(params: Record<string, string>): void {}
  prepareUrlForClient(url: string): void {}
}

class ClientRouter implements IClientRouter {
  addQueryParams(params: Record<string, string>): void {}
  parseUrl(url): void {}
  attachEventListeners(): void {}
  navigate(route: Route): void {}
}

const createDependencyContainer = (router: Router, store) => {
  return {
    getRouter: () => router,
    getStore: () => store,
  }
}

const renderHtmlPage = (store: any, url: any) => {
}

const client = () => {
  const store = createStore(initialData);
  const router = new ClientRouter();

  const di = createDependencyContainer(router, store);
}

const server = (req, res) => {
  const store = createStore(initialData);
  const router = new ServerRouter();

  const di = createDependencyContainer(router, store);

  const htmlPage = renderHtmlPage(store, req.url)
}


/** ===================================================== *
 *    Пример который НЕ нарушает принцип | Решения 2      *
 * ====================================================== */

// Разделяем Router на в самостоятельных интерфейса UrlParser Router UrlPreparer

enum Route2 {
    ABOUT='about_page',
    HOME='home_page',
}

interface UrlParser2 {
    parseUrl: (url) => void;
    addQueryParams: (params: Record<string, string>) => void;
}

interface Router2 {
    navigate: (route: Route2) => void;
    attachEventListeners: () => void;
}

interface UrlPreparer2 {
    prepareUrlForClient: (url: string) => void;
}

class ServerRouter2 implements UrlParser2, UrlPreparer2 {
    parseUrl(url): void {}
    addQueryParams(params: Record<string, string>): void {}
    prepareUrlForClient(url: string): void {}
}

class ClientRouter2 implements Router2, UrlParser2 {
    addQueryParams(params: Record<string, string>): void {}
    parseUrl(url): void {}
    attachEventListeners(): void {}
    navigate(route: Route2): void {}
}


