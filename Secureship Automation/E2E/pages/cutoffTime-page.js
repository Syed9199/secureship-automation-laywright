import testdata from '../../secureship.json'
export class cutoffTime{
    constructor(page){
        this.page=page
        this.burgermenu=page.locator('div.navbar-wrap button.burger-container')
        this.pickup=page.locator('.custom-scrollbar > li:nth-child(5)')
        this.cutoff= page.locator("(//a[contains(text(), 'Cutoff Time')])[1]")
        this.country=page.locator('[autocomplete="nope"]')
        this.select_country=page.getByText('CANADA')
        this.postal=page.locator('[aria-label="Postal code"]')
        this.getestimate=page.locator('//button[@type="submit"]')
        this.switchtonewsite=page.locator('//div[contains(text(), "Get Started!")]')

    }
    async cutOff()
    {
        {
          await this.page.waitForTimeout(2000)
          if(await this.switchtonewsite.isVisible())
             {
               await this.switchtonewsite.click();
             }
          await this.burgermenu.click();
          await this.pickup.click();
          await this.cutoff.click();
          await this.country.click();
          await this.country.fill(testdata.COUNTRY);
          await this.select_country.click();
          await this.postal.click();
          await this.postal.fill(testdata.POSTALCODE);
          await this.getestimate.click();
          await this.page.waitForTimeout(2000);
        }
    }
}