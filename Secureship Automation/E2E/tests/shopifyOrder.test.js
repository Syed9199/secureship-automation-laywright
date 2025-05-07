import {Shipment} from "../pages/createShipment-page";
import test from "../../fixture/login_fixtre";

test(
     'Verify that the users can Import Orders from Shopify',
     async ({page, login})=>
      {
            const Order = new Shipment(page);

            await login.login();
            await Order.importOrder();
      }
     )