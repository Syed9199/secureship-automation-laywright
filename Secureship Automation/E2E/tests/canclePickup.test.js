import {Pickups} from "../pages/pickUps-page";
import test from "../../fixture/login_fixtre";

test(
    'Verify that the User can Cancel a Pickup',
    async ({page, login})=>
    {
        const schedule= new Pickups(page);
        const cancelPickup= new Pickups(page);

        await login.login();
        await schedule.schedulePickup();
        await cancelPickup.cancelPickup();
    }
)

