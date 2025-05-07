import test from "../../fixture/login_fixtre";
import {historyPage} from "../pages/history-page";

test(
    'Verify that Users can Delete a Shipment from the History Page',
    async ({page, login})=>
    {
      const deleteShipment = new historyPage(page);

      await login.login();
      await deleteShipment.deleteShipment();
    }
)