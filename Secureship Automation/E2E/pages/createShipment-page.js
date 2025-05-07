import testdata from '../../secureship.json'
import {expect} from "@playwright/test";

export class Shipment {
    constructor(page){
        this.page = page
        this.createshipment = page.locator('[href="/ship/shipment/create"]')
        this.clearall=page.locator('[data-cy="clearAllInfo"]')
        this.import_btn=page.locator('[data-cy="importOrderButton"]')
        this.order_nmber=page.getByLabel('Order Number')
        this.importorder=page.getByRole('button', {name: 'Import Order'})
        this.clearconfirmation=page.locator('[data-cy="confirmationOk"]')
        this.addressbook1 = page.locator('(//button[@data-cy="addressBookButton"])[2]')
        this.fromaddress=page.locator('(//div[@class="address-item d-flex align-center"])[1]')
        this.addressbook2=page.locator('(//button[@data-cy="addressBookButton"])[1]')
        this.toaddress = page.locator('(//div[@class="address-item d-flex align-center"])[2]')
        this.length = page.getByLabel('Length')
        this.width = page.getByLabel('Width')
        this.height = page.getByLabel('Height')
        this.Weight = page.locator('[data-cy="weightInput"]')
        this.addpack = page.locator('[data-cy="addPackage"]')
        this.next = page.locator('//button[@type="submit"]')
        this.switchtonewsite=page.locator('//div[contains(text(), "Get Started!")]')
        this.duplicatelink=page.locator('//button[@data-cy="btn-duplicate-package"]')
        this.selectstore = page.getByText('Select Store',{exact:true})
        this.shopify = page.locator('[src="/ship/img/store-shopify.74a0f8aa.svg"]')

    }

    async createShipment() {
        if(await this.switchtonewsite.isVisible())
          {
            await this.switchtonewsite.click();
          }
        await this.page.waitForTimeout(1000)
        await this.createshipment.click()
        await this.clearall.click()
        await this.clearconfirmation.click()
        await this.addressbook1.click()
        await this.fromaddress.click()
        await this.addressbook2.click()
        await this.toaddress.click()
        await this.length.click()
        await this.length.fill(testdata.DIMENSIONS)
        await this.width.fill(testdata.DIMENSIONS)
        await this.height.fill(testdata.DIMENSIONS)
        await this.Weight.fill(testdata.WEIGHT)
        await this.addpack.click()
        await this.next.click()

    }
    async addressBooks(){
        await this.page.waitForTimeout(1000)
        if(await this.switchtonewsite.isVisible())
        {
            await this.switchtonewsite.click();
        }
        await this.page.waitForLoadState('domcontentloaded')
        await this.createshipment.click()
        await this.addressbook1.click()
        await this.fromaddress.click()
        await this.addressbook2.click()
        await this.toaddress.click()
    }

    async addPackage(){
        await this.page.waitForTimeout(1000)
        if(await this.switchtonewsite.isVisible())
        {
          await this.switchtonewsite.click();
        }
        await this.createshipment.click()
        await this.clearall.click()
        await this.clearconfirmation.click()
        await this.length.click()
        await this.length.fill(testdata.DIMENSIONS)
        await this.width.fill(testdata.DIMENSIONS)
        await this.height.fill(testdata.DIMENSIONS)
        await this.Weight.fill(testdata.WEIGHT)
        await this.addpack.click()
        await expect(await this.page.locator('[data-cy="packageSummaryItem"]')).toBeVisible();
    }

    async importOrder(){
        await this.page.waitForTimeout(1000)
        if(await this.switchtonewsite.isVisible())
        {
           await this.switchtonewsite.click();
        }
        await this.createshipment.click()
        await this.clearall.click()
        await this.clearconfirmation.click()
        await this.import_btn.click()
        await this.selectstore.click()
        await this.shopify.click()
        await this.order_nmber.fill(testdata.ORDERNUMBER)
        await this.importorder.click()
        await this.page.waitForTimeout(2000)
        await this.length.click()
        await this.length.fill(testdata.DIMENSIONS)
        await this.width.fill(testdata.DIMENSIONS)
        await this.height.fill(testdata.DIMENSIONS)
        await this.addpack.click()
        await expect(await this.page.locator('[data-cy="packageSummaryItem"]')).toBeVisible();

    }

    async duplicatePackage()
        {await this.page.waitForTimeout(1000)
        if(await this.switchtonewsite.isVisible())
        {
            await this.switchtonewsite.click();
        }
       await this.duplicatelink.click()
    }


}



