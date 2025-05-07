import {MarketPlaces} from "../pages/connectMarketplace-page";
import test from "../../fixture/login_fixtre";

test(
    'Verify that the User can Remove the Connected BigCommerce Store',
    async ({page, login})=>
    {
        const store = new MarketPlaces(page);

        await login.login();
        await store.deleteBigcommerce()
    }
)