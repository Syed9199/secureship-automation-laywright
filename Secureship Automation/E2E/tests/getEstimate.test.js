import {Estimate} from "../pages/getEstimate-page";
import test from "../../fixture/login_fixtre";

test.skip(
    'Verify that the users can get the estimated cost for Shipments using the Get Estimate',
    async ({page,login})=>
   {
    const getEstimate = new Estimate(page);

    await login.login();
    await getEstimate.estimate();
   }
  )