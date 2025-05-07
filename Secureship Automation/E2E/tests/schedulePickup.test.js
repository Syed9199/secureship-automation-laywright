import {Pickups} from "../pages/pickUps-page";
import test from "../../fixture/login_fixtre";

test(
    'Verify that the Users can Schedule a Pickup for Created Shipments',
    async ({page,login})=>
     {
      const schedule= new Pickups(page);

      await login.login();
      await schedule.schedulePickup();
     }
)