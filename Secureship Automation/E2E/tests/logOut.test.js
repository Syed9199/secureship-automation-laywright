import {test} from "@playwright/test";
import {Login} from "../pages/userLogin-page";

test(
    'Verify that the users can successfully Logout from the site',
    async ({page})=>
    {
      const login = new Login(page)
      await login.login()
      await login.logout()
    }
 )

