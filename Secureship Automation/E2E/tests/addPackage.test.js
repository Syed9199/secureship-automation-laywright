import {Shipment} from '../pages/createShipment-page.js';
import test from "../../fixture/login_fixtre";

test(
  'Verify that user can Add a Package',
  async ({page, login,}) =>
  {
    const addPackage = new Shipment(page);
    await login.login();
    await addPackage.addPackage();
  }
);