
import {Shipment} from "../pages/createShipment-page.js";
import test from "../../fixture/login_fixtre";
import {yourResult} from "../pages/yourResult-page";


test(
     'Verify that the Users can Create Shipment with valid data',
     async ({page, login})=>
     {
        const createShipment  = new Shipment(page);
        const carrier = new yourResult(page);

        await login.login();
        await createShipment.createShipment();
        await carrier.selectCarrier();
     }
    )

