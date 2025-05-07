import {Shipment} from "../pages/createShipment-page";
import test from "../../fixture/login_fixtre";

test(
    'Verify that User can access the Address from the Address books',
    async ({page, login})=>
    {
     const selectAddress = new Shipment(page);

     await login.login();
     await selectAddress.addressBooks();
    }
)