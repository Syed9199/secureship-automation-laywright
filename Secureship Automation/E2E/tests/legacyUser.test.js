import test from "../../fixture/login_fixtre";
import {Preferences} from "../pages/userPreferences-page";

test(
    'Verify that the users with preference to use Legacy site can use Legacy site',
    async ({page, login})=>
    {
      const Preference = new Preferences(page);

      await login.login();
      await Preference.switchLegacy();
      await login.login();
      await Preference.getStarted();
    }
)