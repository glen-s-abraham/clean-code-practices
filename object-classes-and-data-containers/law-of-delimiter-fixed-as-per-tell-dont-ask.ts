class Customer {
  lastPurchase: any;

  getLastPurchaseDate() {
    return this.lastPurchase.date;
  }
}

class DeliveryJob {
  customer: any;
  warehouse: any;

  constructor(customer, warehouse) {
    this.customer = customer;
    this.warehouse = warehouse;
  }

  deliverLastPurchase() {
    this.warehouse.deliverPurchase(this.customer.lastPurchase); //tell don't ask principle - it's ok to pass in such objects as fuction params
  }
}
