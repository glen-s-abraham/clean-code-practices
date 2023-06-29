type Purchase = any;

let Logistics: any;

class Delivery {
  protected purchase: Purchase;

  constructor(purchase: Purchase) {
    this.purchase = purchase;
  }

  deliverProduct() {
   
  }

  trackProduct() {
   
  }
}

class ExpressDeliveryClass extends Delivery {
  deliverProduct() {
    Logistics.issueExpressDelivery(this.purchase.product);
  }
  trackProduct() {
    Logistics.trackExpressDelivery(this.purchase.product);
  }
}

class InsuredDeliveryClass extends Delivery {
  deliverProduct() {
    Logistics.issueInsuredDelivery(this.purchase.product);
  }
  trackProduct() {
    Logistics.trackInsuredDelivery(this.purchase.product);
  }
}

class StandardDeliveryClass extends Delivery {
  deliverProduct() {
    Logistics.issueStandardDelivery(this.purchase.product);
  }
  trackProduct() {
    Logistics.trackStandardDelivery(this.purchase.product);
  }
}


//add a factory method