import {Shipment} from "../pages/createShipment-page";
import test from "../../fixture/login_fixtre";

test('Verify that the users can Duplicate the Added Package',
    async ({page, login})=>
    {
        const addpackage = new Shipment(page);

        await login.login();
        await addpackage.addPackage();
        await addpackage.duplicatePackage();

    }
)