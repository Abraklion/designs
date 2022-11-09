
/* ======================= *
 *  Паттерн Facade (Фасад) *
 * ======================= */

/**
 *  Класс Complaints - жалобы
 * */
class Complaints {

  /** Конструктор */
  constructor() {
    this.complaints = []
  }

  /**
   * уведомления о жалобе - абстрактный метод который должен быть реализован у потомков
   * @param {Object} complaint
   * @return {string}
   */
  reply(complaint) {}

  /**
   * добавления жалобы
   * @param {Object} complaint
   * @return {string}
   */
  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

/**
 *  Класс ProductComplaints - жалобы отдела продуктов
 * */
class ProductComplaints extends Complaints {

  /**
   * уведомления о жалобе
   * @param {Object} complaint
   * @return {string}
   */
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

/**
 *  Класс ProductComplaints - жалобы отдела продуктов
 * */
class ServiceComplaints extends Complaints {

  /**
   * уведомления о жалобе
   * @param {Object} complaint
   * @return {string}
   */
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

/**
 *  Класс ComplaintRegistry - используем паттерн Facade
 * */
class ComplaintRegistry {

  /**
   * регистрация жалобы
   * @param {string} customer - имя стукача
   * @param {string} type - отдел стукача
   * @param {string} details - жалоба стукача
   * @return {string}
   */
  register(customer, type, details) {
    const id = Date.now()
    let complaint

    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({id, customer, details})
  }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Vladilen', 'service', 'недоступен'))
console.log(registry.register('Elena', 'product', 'вылазит ошибка'))

