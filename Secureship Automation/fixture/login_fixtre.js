import { test as baseTest } from '@playwright/test';
import { Login } from '../E2E/pages/userLogin-page';

const test = baseTest.extend({
    login: async ({ page }, use) => {
        await use(new Login(page))
    },
});
export default test ;