import {connectCarriers} from "../pages/connectCarrier-page";
import test from "../../fixture/login_fixtre";

test.skip(
    'Verify that the User can Connect and remove Carrier Accounts',
    async ({page, login})=>
     {
        const selectCarrier  = new connectCarriers(page);

        await login.login();
        await selectCarrier.Carriers();
     }
   )
