import test from "../../fixture/login_fixtre";
import {historyPage} from "../pages/history-page";
import {yourResult} from "../pages/yourResult-page";

test('Verify that the Users can Duplicate a Shipment from the History Page',
    async ({page, login})=>
    {
        const duplicateShipment = new historyPage(page);
        const createShipment = new yourResult(page)

        await login.login();
        await duplicateShipment.duplicateShipment();
        await createShipment.Carrier();
    }
)


