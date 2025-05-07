import testdata from '../../secureship.json'
export class yourResult {

    constructor(page)
    {
        this.page = page
        this.carrier = page.locator(testdata.CARRIER)
        this.confirm = page.locator('//button[@data-cy="shipmentNotificationSubmitButton"]')
        this.CompleteShipment = page.locator('[type="submit"]')
        this.okay = page.locator('[data-cy="shipmentNotificationSubmitButton"]')
    }

    async selectCarrier()
    {
        {
            await this.carrier.click();
            await this.page.waitForTimeout(1000);
            await this.confirm.click();
            await this.CompleteShipment.click();
            await this.page.waitForTimeout(1000)
            await this.okay.click();
        }
    }

    async Carrier()
    {
        {
            await this.carrier.click();
            await this.page.waitForLoadState("domcontentloaded");
            await this.confirm.click();
            await this.page.waitForLoadState()
        }
    }
}