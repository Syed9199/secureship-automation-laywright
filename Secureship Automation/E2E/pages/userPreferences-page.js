
export class Preferences {

    constructor(page)
    {
        this.page=page;
        this.legacyredirect=page.locator('//div[contains(text(), "Get Started!")]');
        this.userprofile=page.locator('button.user-profile');
        this.preferences=page.getByRole('link', { name: 'Preferences' });
        this.legacybtn=page.locator('(//div[contains(text(), "Use new Secureship website")]/..//div[@class="v-input__control"])');
        this.logout=page.getByRole('link', { name: 'logout' });
    }

    async switchLegacy()
    {
        await this.page.waitForLoadState('domcontentloaded')
        if(await this.legacybtn.isVisible())
           {
            await this.legacybtn.click();
           }
        await this.userprofile.click();
        await this.preferences.click();
        await this.legacybtn.click();
        await this.userprofile.click();
        await this.logout.click();
    }

    async getStarted()
    {
        await this.page.waitForTimeout(1000);
        await this.legacyredirect.click();
    }

}