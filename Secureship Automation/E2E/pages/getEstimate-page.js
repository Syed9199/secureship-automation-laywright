
import testdata from '../../secureship.json'
export class Estimate{
    constructor(page)
    {
        this.page = page
        this.menu = page.locator('//div[@class="burger burger--invert"]')
        this.EstimateMenu = page.locator('//a[@href = "/ship/estimate"]')
        this.ShipFrom = page.locator('(//input[@autocomplete="nope"])[1]')
        this.FromPostalCode = page.locator('(//input[@aria-label="Postal code"])[1]')
        this.dropdown = page.locator('[role="listbox"]')
        this.ShipTo = page.locator('(//input[@autocomplete="nope"])[2]')
        this.ToPostalCode = page.locator('(//input[@aria-label="Postal code"])[2]')
        this.Package = page.locator('(//div[@class="v-select__slot"])[3]')
        this.length = page.getByLabel('Length')
        this.width = page.getByLabel('Width')
        this.height = page.getByLabel('Height')
        this.weight = page.locator('[data-cy="weightInput"]')
        this.addpackage=page.locator('//button[@data-cy="addPackage"]')
        this.next = page.locator('[type="submit"]')
        this.carrier=page.locator(testdata.CARRIER)
        this.clearall=page.locator('[data-cy="clearAllInfo"]')
        this.clearconfirmation=page.locator('[data-cy="confirmationOk"]')
    }
    async estimate()
    {
        await this.menu.click()
        await this.EstimateMenu.click()
        await this.clearall.click()
        await this.clearconfirmation.click()
        await this.ShipFrom.click()
        await this.ShipFrom.fill(testdata.SHIP_FROM_TYPE)
        await this.dropdown.getByRole('option', { name: testdata.SHIP_FROM_SELECT }).click()
        await this.FromPostalCode.fill(testdata.SHIP_FROM_POSTAL_CODE)
        await this.ShipTo.click()
        await this.ShipTo.fill(testdata.SHIP_TO_TYPE)
        await this.dropdown.getByRole('option',{name:testdata.SHIP_TO_SELECT}).click()
        await this.ToPostalCode.fill(testdata.SHIP_TO_POSTAL_CODE)
        await this.page.waitForTimeout(3000)
        await this.Package.click()
        await this.length.fill(testdata.DIMENSIONS)
        await this.width.fill(testdata.DIMENSIONS)
        await this.height.fill(testdata.DIMENSIONS)
        await this.weight.fill(testdata.WEIGHT)
        await this.addpackage.click()
        await this.next.click()
        await this.page.waitForTimeout(3000)
        await this.carrier.click()
        await this.page.waitForTimeout(2000)
    }
}

