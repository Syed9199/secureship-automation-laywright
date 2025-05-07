import test from "../../fixture/login_fixtre";
import {Shipment} from "../pages/createShipment-page";
import {ChangeCC} from "../pages/changeCreditcard-page";
import {yourResult} from "../pages/yourResult-page";


test(
     'Verify that the users can change their Credit Cards',
     async ({page, login})=>
      {
         const shipment=new Shipment(page);
         const selectCarrier = new yourResult(page);
         const changeCard=new ChangeCC(page);

         await login.login();
         await shipment.createShipment();
         await selectCarrier.Carrier();
         await changeCard.changeCreditcard();
      }
    )
