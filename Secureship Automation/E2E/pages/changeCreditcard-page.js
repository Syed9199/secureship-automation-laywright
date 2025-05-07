
export class ChangeCC{
    constructor(page) {
        this.page=page
        this.chagecard=page.locator('[class="text-gray v-btn v-btn--text theme--light v-size--default"]')
        this.ccnmbr=page.locator('[aria-label="Please enter your card number"]')
        this.month=page.locator('(//div[@class="v-text-field__slot"])[2]')
        this.year=page.locator('(//div[@class="v-text-field__slot"])[3]')
        this.cvv=page.locator('(//div[@class="v-text-field__slot"])[4]')
        this.ccname=page.locator('[aria-label="Please enter the cardholder name"]')
        this.useraddress=page.locator('[aria-label="Address line 1"]')
        this.userpostalcode=page.locator('[aria-label="Postal code"]')
        this.usercountry=page.locator(`//div[@aria-label="Country"]`)
        this.option=page.locator('[class="v-list-item__title"]')
        this.completeshipment=page.locator('[data-cy="checkoutSubmitButton"]')
        this.okay = page.locator('[data-cy="shipmentNotificationSubmitButton"]')

    }


    async changeCreditcard(){
        await this.chagecard.click();
        await this.ccnmbr.click();
        await this.ccnmbr.fill(process.env.CCNMBR);
        await this.month.click();
        await this.month.type(process.env.MM);
        await this.year.click();
        await this.year.type(process.env.YY);
        await this.cvv.click();
        await this.cvv.type(process.env.CVV);
        await this.ccname.click();
        await this.ccname.type(process.env.CCNAME);
        await this.useraddress.click()
        await this.useraddress.type(process.env.CCADRESS)
        await this.userpostalcode.click();
        await this.userpostalcode.type(process.env.CCPOSTAL);
        await this.usercountry.click();
        await this.usercountry.type(process.env.CCCOUNTRY);
        await this.option.click();
        await this.page.waitForLoadState("domcontentloaded");
        await this.completeshipment.click();
        await this.okay.click();
        await this.okay.click();
    }
}