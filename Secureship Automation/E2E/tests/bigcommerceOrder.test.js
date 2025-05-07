import {MarketPlaces} from "../pages/connectMarketplace-page";
import test from "../../fixture/login_fixtre";

test(
    'Verify that the User can Import Orders from BigCommerce Store',
    async ({page, login})=>
    {
        const store = new MarketPlaces(page);

        await login.login();
        await store.connectBigcommerce();
        await store.bigcommerceOrder();
    }
)
