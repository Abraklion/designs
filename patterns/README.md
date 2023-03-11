
# Паттерны ( design patterns )

## Порождающие

> паттерны которые создают новые объекты, или позволяют получить доступ к уже существующим

1. **[Constructor](https://github.com/Abraklion/designs/blob/master/patterns/1%20creational/1_constructor.js)** ( конструктор ) - создает новые обьекты определеного типа


2. **[Factory](https://github.com/Abraklion/designs/blob/master/patterns/1%20creational/2_factory.js)** ( фабрика ) - функция является фабричной, если она возвращает новый объект без использования new ключевого слова.


3. **[Prototype](https://github.com/Abraklion/designs/blob/master/patterns/1%20creational/3_prototype.js)** ( прототип ) - удобный способ совместного использования свойств и методов многими объектами одного типа.


4. **[Singleton](https://github.com/Abraklion/designs/blob/master/patterns/1%20creational/4_singleton.js)** ( одиночка ) - это объект, который есть в системе в одном экземпляре.


5. **[Abstract_factory](https://github.com/Abraklion/designs/blob/master/patterns/1%20creational/19_abstract-factory.js)** ( абстрактная фабрика ) - это функция которая создает интерфейс группирующий две фабрики.


6. **[Builder](https://github.com/Abraklion/designs/blob/master/patterns/1%20creational/20_builder.js)** ( строитель ) - позволяет создать различные конфигурации обьектов, не засоряя исходный конструктор дополнительной логикой.

## Структурные

> добавляют функционал для существующих объектов, при этом не меняя поведения старой системы. Позволяя выстроить коммуникацию между объектами

1. **[Adapter](https://github.com/Abraklion/designs/blob/master/patterns/2%20structural/5_adapter.js)** ( адаптер ) - позволяет объектам с несовместимыми интерфейсами работать вместе.


2. **[Decorator](https://github.com/Abraklion/designs/blob/master/patterns/2%20structural/6_decorator.js)** ( декоратор ) - можем динамически добавлять обьектам новые свойства и методы.


3. **[Facade](https://github.com/Abraklion/designs/blob/master/patterns/2%20structural/7_facade.js)** ( фасад ) - обеспечивает удобный высокоуровневый интерфейс для больших блоков кода, скрывая за собой их истинную сложность.


4. **[Flyweight](https://github.com/Abraklion/designs/blob/master/patterns/2%20structural/8_flyweight.js)** ( легковес ) - полезный способ сохранить память, когда мы создаем большое количество похожих объектов.


5. **[Proxy](https://github.com/Abraklion/designs/blob/master/patterns/2%20structural/9_proxy.js)** ( прокси ) - перехват и контроль взаимодействий с целевыми объектами.


6. **[Module](https://github.com/Abraklion/designs/blob/master/patterns/2%20structural/18_module.js)** ( модуль ) - позволяет разделить код на более мелкие, повторно используемые части.


7. **[Composite](https://github.com/Abraklion/designs/blob/master/patterns/2%20structural/21_composite.js)** ( компоновщик ) - позволяет создавать коллекцию объектов, представленную в древовидной форме, и работать с ней, как с единым объектом.


8. **[Bridge](https://github.com/Abraklion/designs/blob/master/patterns/2%20structural/22_bridge.js)** ( мост ) - нужен для решения задачи путем разделения одного или нескольких классов на отдельные иерархии — абстракцию и реализацию.

## Поведенческие

> коммуникация между уже существующими объектами, классами, разными сущностями

1. **[Chain_of_responsibility](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/10_chain_of_responsibility.js)** ( цепочка обязанностей ) - позволяет передавать запросы последовательно по цепочке обработчиков.


2. **[Command](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/11_command.js)** ( команда ) - инкапсулирует действия и нужные данные для обработки этих действий в объекты.


3. **[Iterator](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/12_iterator.js)** ( итератор ) - позволяет перебирать элементы коллекции, не зная, как реализована коллекция.


4. **[Mediator](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/13_mediator.js)** ( посредник ) - позволяет компонентам взаимодействовать друг с другом через центральную точку: посредник.


5. **[Observer](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/14_observer.js)** ( наблюдатель ) - мы можем подписывать определенные объекты(наблюдатели) , на другой объект, называемый наблюдаемым.


6. **[State](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/15_state.js)** ( состояние ) - управляет изменением поведения объекта при изменении его внутреннего состояния.


7. **[Strategy](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/16_strategy.js)** ( стратегия ) - позволяет выбирать алгоритм во время выполнения программы.


8. **[Template](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/17_template.js)** ( шаблон ) - определя некий скелет будущего алгоритма, но при этом делегирует создания конкретного функционала в дочернии классы.


9. **[Memento](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/23_memento.js)** ( снимок ) - сохраняет предыдущие состояниие обьектов и при необходимости может их восстановить.


10. **[Visitor](https://github.com/Abraklion/designs/blob/master/patterns/3%20behaviour/24_visitor.js)** ( посетитель ) - добавляет новую функциональность уже существующим классам, не изменяя исходный код класса.

