import {test} from "@playwright/test";
import {Login} from "../pages/userLogin-page";

test(
    'Verify that the users can Login with Valid Credentials',
    async ({page})=>
    {
      const login = new Login(page);
      await login.login();
    }
    )
