import { InAppPurchase } from "@ionic-native/in-app-purchase";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the InapppurchasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-inapppurchase",
  templateUrl: "inapppurchase.html",
})
export class InapppurchasePage {
  constructor(
    private iap: InAppPurchase,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.getProductInfo();
  }

  getProductInfo() {
    this.iap
      .getProducts(["prod1", "prod2"])
      .then((products) => {
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
