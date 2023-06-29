class Customer {
  lastPurchase: any;
}

class DeliveryJob {
  customer: any;
  warehouse: any;

  constructor(customer, warehouse) {
    this.customer = customer;
    this.warehouse = warehouse;
  }

  deliverLastPurchase() {
    const date = this.customer.lastPurchase.date; //not allowd by law of demeter - as last purchase is an unknown object
    this.warehouse.deliverPurchasesByDate(this.customer, date);
  }
}
