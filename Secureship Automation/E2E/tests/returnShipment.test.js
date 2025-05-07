import test from "../../fixture/login_fixtre";
import {historyPage} from "../pages/history-page";
import {yourResult} from "../pages/yourResult-page";

test(
    'Verify that the user can create return shipment from the History Page',
    async ({page, login})=>
    {
        const returnShipment = new historyPage(page);
        const Carrier = new yourResult(page)

        await login.login();
        await returnShipment.returnShipment()
        await Carrier.selectCarrier()
    }
)