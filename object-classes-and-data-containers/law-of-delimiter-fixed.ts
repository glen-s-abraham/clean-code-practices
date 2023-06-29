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

      const date = this.customer.getLastPurchaseDate();
      this.warehouse.deliverPurchasesByDate(this.customer, date);
     
    }
  }