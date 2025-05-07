import testdata from '../../secureship.json'
export class connectCarriers {
    constructor(page) {
        this.page = page
        this.menu = page.locator('.burger-container.v-btn')
        this.add_carrier = page.locator('[data-test="btn-carrier-connect-modal"]')
        this.select_carrier = page.locator('(//button[@class="d-flex align-center justify-start"])[1]')
        this.ups_account = page.locator('[name="UPS-accountNumber"]')
        this.access_number = page.locator('[name="UPS-accessLicenseNumber"]')
        this.username = page.locator('[name="UPS-uname"]')
        this.password = page.locator('[name="UPS-p"]')
        this.countrytoselect = page.locator('//div[@aria-label="Payor Country Code"]')
        this.country = page.getByRole('option',{name:"CANADA"})
        this.connect = page.locator('[type="submit"]')
        this.delete = page.locator('[data-test="btn-delete"]')
        this.confirm = page.locator('[data-cy="confirmationOk"]')
    }

    async Carriers() {
        await this.menu.click()
        await this.page.getByText('Connect', { exact: true }).click();
        await this.page.getByRole('link', { name: 'Carrier Accounts' }).click();
        await this.add_carrier.click()
        await this.select_carrier.click()
        await this.ups_account.type(testdata.UPS_ACCOUNT)
        await this.access_number.type(testdata.ACCESS_LICENCE)
        await this.username.type(testdata.USERNAME)
        await this.password.type(testdata.PASSWORD)
        await this.countrytoselect.click()
        await this.country.click()
        await this.connect.click()
        await this.page.waitForTimeout(1000)
        await this.delete.click()
        await this.confirm.click()
        await this.page.waitForTimeout(2000)
    }
}

