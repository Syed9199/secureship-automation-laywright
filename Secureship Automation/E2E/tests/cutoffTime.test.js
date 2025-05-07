import { cutoffTime} from "../pages/cutoffTime-page";
import test from "../../fixture/login_fixtre";

test('Verify that the users can see the Cutoff times of carriers',
    async ({page, login})=>
   {
    const time = new cutoffTime(page);

    await login.login();
    await time.cutOff();
   }
    )